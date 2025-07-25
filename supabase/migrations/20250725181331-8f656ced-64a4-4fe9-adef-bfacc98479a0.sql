-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  balance DECIMAL(10,2) NOT NULL DEFAULT 1000.00,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create lotteries table
CREATE TABLE public.lotteries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  ticket_price DECIMAL(10,2) NOT NULL,
  total_tickets INTEGER NOT NULL DEFAULT 100,
  sold_tickets INTEGER NOT NULL DEFAULT 0,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for lotteries
ALTER TABLE public.lotteries ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing lotteries (public)
CREATE POLICY "Lotteries are viewable by everyone" 
ON public.lotteries 
FOR SELECT 
USING (true);

-- Create tickets table for purchased tickets
CREATE TABLE public.tickets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  lottery_id UUID NOT NULL REFERENCES public.lotteries(id) ON DELETE CASCADE,
  ticket_number TEXT NOT NULL,
  purchase_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  price_paid DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for tickets
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;

-- Create policies for tickets
CREATE POLICY "Users can view their own tickets" 
ON public.tickets 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own tickets" 
ON public.tickets 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_lotteries_updated_at
  BEFORE UPDATE ON public.lotteries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data ->> 'display_name', NEW.email));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Insert sample lottery data
INSERT INTO public.lotteries (title, description, image, ticket_price, total_tickets, sold_tickets, end_time, category) VALUES
('iPhone 15 Pro Max 256GB', 'Новітший смартфон Apple з потужним процесором A17 Pro', '/placeholder.svg', 50.00, 100, 23, NOW() + INTERVAL '7 days', 'smartphones'),
('Samsung Galaxy S24 Ultra', 'Флагманський смартфон Samsung з S Pen', '/placeholder.svg', 45.00, 100, 17, NOW() + INTERVAL '5 days', 'smartphones'),
('MacBook Pro 14" M3', 'Потужний ноутбук для професіоналів', '/placeholder.svg', 150.00, 50, 8, NOW() + INTERVAL '10 days', 'electronics'),
('PlayStation 5', 'Нова ігрова консоль від Sony', '/placeholder.svg', 75.00, 80, 34, NOW() + INTERVAL '3 days', 'electronics'),
('Chanel No. 5 Parfum', 'Легендарний аромат від Chanel', '/placeholder.svg', 25.00, 200, 89, NOW() + INTERVAL '2 days', 'cosmetics'),
('Tesla Model 3', 'Електромобіль майбутнього', '/placeholder.svg', 500.00, 20, 3, NOW() + INTERVAL '15 days', 'transport');