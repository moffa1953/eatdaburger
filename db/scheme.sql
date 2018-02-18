CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` var(100) NOT NULL,
  `devour` boolean DEFAULT '0',
  'date` TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
  PRIMARY KEY (`id`)
) 