-- Insert lottery data from static array into database
INSERT INTO public.lotteries (title, description, image, ticket_price, total_tickets, sold_tickets, end_time, category) VALUES
('Tesla Model 3', 'Електричний автомобіль преміум класу', 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop', 250, 1000, 750, '2024-01-15T18:00:00+00:00', 'Транспорт'),
('iPhone 15 Pro Max', 'Найновіший смартфон від Apple', 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop', 150, 500, 320, '2024-01-12T20:00:00+00:00', 'Електроніка'),
('Квартира у центрі Києва', '2-кімнатна квартира, 65 м²', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', 500, 2000, 1200, '2024-01-20T12:00:00+00:00', 'Нерухомість'),
('MacBook Pro M3', 'Потужний ноутбук для професіоналів', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop', 200, 750, 450, '2024-01-18T16:00:00+00:00', 'Електроніка'),
('Золоті сережки з діамантами', 'Ексклюзивні ювелірні вироби', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop', 100, 300, 180, '2024-01-14T14:00:00+00:00', 'Ювелірні вироби'),
('Відпочинок на Мальдівах', '7 днів у 5-зірковому готелі', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 300, 400, 280, '2024-01-16T10:00:00+00:00', 'Туризм');