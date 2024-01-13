CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

DELETE FROM "gallery";

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/mnorch.jpg', 'MN Orchestra', 'Went to hear Rachmaninov''s Rhapsody on a Theme by Paganini.'),
('images/gavinStPaul.jpg', 'Photo Shoot', 'Union Depot by Rachelle Penners'),
('images/tulips.jpg', 'Tulips', 'A gift from a dear friend.'),
('images/robot.jpg', 'Robot', 'I adore robots.');
  
