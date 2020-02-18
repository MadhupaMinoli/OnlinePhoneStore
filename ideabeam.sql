-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2020 at 04:42 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ideabeam`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`) VALUES
(1, 'Apple'),
(2, 'Samsung'),
(3, 'Xiaomi\r\n'),
(4, 'Nokia\r\n'),
(5, 'Oppo'),
(6, 'Huwawei'),
(7, 'Sony'),
(8, 'Zigo'),
(9, 'LG'),
(10, 'Blackberry');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `mobile_phone`
--

CREATE TABLE `mobile_phone` (
  `mobile_phone_id` int(11) NOT NULL,
  `spec` varchar(255) DEFAULT NULL,
  `model_phone_model_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mobile_phone`
--

INSERT INTO `mobile_phone` (`mobile_phone_id`, `spec`, `model_phone_model_id`) VALUES
(1, '256 GB', 1),
(2, '128 GB', 2),
(3, '128 GB', 3),
(4, '128 GB', 6);

-- --------------------------------------------------------

--
-- Table structure for table `phone_model`
--

CREATE TABLE `phone_model` (
  `phone_model_id` int(11) NOT NULL,
  `model_name` varchar(255) DEFAULT NULL,
  `brand_brand_id` int(11) DEFAULT NULL,
  `url` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `phone_model`
--

INSERT INTO `phone_model` (`phone_model_id`, `model_name`, `brand_brand_id`, `url`) VALUES
(1, 'iphone pro 11', 1, 'https://www.ideabeam.com/images/product/apple-iphone-11-pro-512gb.jpg'),
(2, 'iphone pro 10', 1, 'https://www.ideabeam.com/images/product/apple-iphone-xr-256gb.jpg'),
(3, 'galaxi S10', 2, 'https://www.ideabeam.com/images/product/samsung-galaxy-a10s.jpg'),
(4, 'galaxi S10 plus', 2, 'https://www.ideabeam.com/images/product/big/samsung-galaxy-a50s.jpg'),
(5, 'iphone max 8', 1, 'https://www.ideabeam.com/images/product/apple-iphone-8.jpg'),
(6, 'iphone  max 11', 1, 'https://www.ideabeam.com/images/product/apple-iphone-xs-512gb.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `store_id` int(11) NOT NULL,
  `store_contact_no` varchar(255) DEFAULT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`store_id`, `store_contact_no`, `store_name`, `url`, `address`) VALUES
(1, '077 7 444 444', 'BuyAbans.com', 'https://www.ideabeam.com/images/store/buyabans-com.jpg', 'Galle Road, Colombo \r\n'),
(2, '077 7 265 152', 'Celltronics', 'https://www.ideabeam.com/images/store/celltronics.jpg', 'Wellawatte, Colomno\r\n'),
(3, '011 1 025 206', 'Daraz\r\n', 'https://www.ideabeam.com/images/store/daraz-lk.jpg', 'School Lane, Colombo'),
(4, '011 1 545 546', 'Doctor Mobile', 'https://www.ideabeam.com/images/store/doctor-mobile.jpg', 'One Galle Face'),
(5, '0415555555', 'Dealz', 'https://www.ideabeam.com/images/store/idealz-lanka.jpg', 'Liberty Plaza, Colombo-03'),
(6, '0141 1 454 545', 'Kapruka', 'https://www.ideabeam.com/images/store/kapruka.jpg', ' Colombo 4'),
(7, '011 4 885 696', 'Dialog\r\n', 'https://www.ideabeam.com/images/store/dialog.jpg', 'silvard, Negombo'),
(8, '011 4 222 696', 'Mobitel\r\n', 'https://www.ideabeam.com/images/store/mobitel.jpg', 'e wal rd, \r\nNegombo');

-- --------------------------------------------------------

--
-- Table structure for table `store_products`
--

CREATE TABLE `store_products` (
  `store_product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `mobile_phone_mobile_phone_id` int(11) DEFAULT NULL,
  `store_store_id` int(11) DEFAULT NULL,
  `discount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store_products`
--

INSERT INTO `store_products` (`store_product_id`, `price`, `mobile_phone_mobile_phone_id`, `store_store_id`, `discount`) VALUES
(1, 10000, 1, 1, 25),
(2, 15000, 2, 1, 20),
(3, 10000, 3, 2, 20),
(4, 10500, 1, 2, 25),
(5, 10500, 1, 4, 15),
(6, 12000, 1, 8, 15),
(8, 15000, 3, 1, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `mobile_phone`
--
ALTER TABLE `mobile_phone`
  ADD PRIMARY KEY (`mobile_phone_id`),
  ADD KEY `FK6waey8gmw3ct8j7cv9utr62qg` (`model_phone_model_id`);

--
-- Indexes for table `phone_model`
--
ALTER TABLE `phone_model`
  ADD PRIMARY KEY (`phone_model_id`),
  ADD KEY `FK98v8t3nhs7dxxnn75u1aygl15` (`brand_brand_id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`store_id`);

--
-- Indexes for table `store_products`
--
ALTER TABLE `store_products`
  ADD PRIMARY KEY (`store_product_id`),
  ADD KEY `FKdbuatg6enoauwt3peqc8hx41o` (`mobile_phone_mobile_phone_id`),
  ADD KEY `FKi87gukoysik7ls8yd5vtv3u29` (`store_store_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mobile_phone`
--
ALTER TABLE `mobile_phone`
  ADD CONSTRAINT `FK6waey8gmw3ct8j7cv9utr62qg` FOREIGN KEY (`model_phone_model_id`) REFERENCES `phone_model` (`phone_model_id`);

--
-- Constraints for table `phone_model`
--
ALTER TABLE `phone_model`
  ADD CONSTRAINT `FK98v8t3nhs7dxxnn75u1aygl15` FOREIGN KEY (`brand_brand_id`) REFERENCES `brand` (`brand_id`);

--
-- Constraints for table `store_products`
--
ALTER TABLE `store_products`
  ADD CONSTRAINT `FKdbuatg6enoauwt3peqc8hx41o` FOREIGN KEY (`mobile_phone_mobile_phone_id`) REFERENCES `mobile_phone` (`mobile_phone_id`),
  ADD CONSTRAINT `FKi87gukoysik7ls8yd5vtv3u29` FOREIGN KEY (`store_store_id`) REFERENCES `store` (`store_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
