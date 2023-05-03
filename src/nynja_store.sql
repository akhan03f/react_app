-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2023 at 03:53 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nynja_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(10) UNSIGNED NOT NULL,
  `cat` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat`) VALUES
(10, 'MensShirts'),
(20, 'MensPants'),
(30, 'MensFootwear'),
(40, 'WomensShirts'),
(50, 'WomensPants'),
(60, 'WomensFootwear');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items_in_cart`
--

CREATE TABLE `items_in_cart` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `prod_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_30_155233_remove_updated_at_column_from_items_in_cart_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `ts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `total_price` decimal(13,2) DEFAULT NULL,
  `comments` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_products_join`
--

CREATE TABLE `order_products_join` (
  `ord_id` int(10) UNSIGNED NOT NULL,
  `prod_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `price_per_unit` decimal(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(51, 'App\\Models\\User', 5, 'auth_token', 'bc02dd5925134b2903c915266fad1655ee9e40b0f0783a2f70e7b73954344be9', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:12', '2023-04-30 18:24:12'),
(52, 'App\\Models\\User', 5, 'auth_token', '410626a960fe4d3dbae1d6dcf54b338d58afeb4fda3a03d98f1e25677334254b', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:12', '2023-04-30 18:24:12'),
(53, 'App\\Models\\User', 5, 'auth_token', '75ff6b480baf5f65bc555de8e578305edb810572bb442b1d3361417df141127c', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:14', '2023-04-30 18:24:14'),
(54, 'App\\Models\\User', 5, 'auth_token', '71a488dd756ac823ae1d155873e466a69cd5685fcf36d8194830ac536673f03a', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:15', '2023-04-30 18:24:15'),
(55, 'App\\Models\\User', 5, 'auth_token', 'd1b4f0647ac578b38d35c3026604fe13b8f2135fb22af7f8e51b38ed8f058aa5', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:17', '2023-04-30 18:24:17'),
(56, 'App\\Models\\User', 5, 'auth_token', 'fd2d5fcf089e5bbd384baaef05d083295cdcae54471550ce380475231dfbf36f', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:18', '2023-04-30 18:24:18'),
(57, 'App\\Models\\User', 5, 'auth_token', '3e45a28c223b42ee959a55396154206b017013b72ab99265886ec56e972780f2', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:18', '2023-04-30 18:24:18'),
(58, 'App\\Models\\User', 5, 'auth_token', 'ebcc29e9bd08e46c5c92a57b67a246765e0a5a00b687a7647a4f9abc860a3951', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:18', '2023-04-30 18:24:18'),
(59, 'App\\Models\\User', 5, 'auth_token', '8a75d3565a1298e69f73e7b2aed6570dc10e327df1084f2d5a6424719f0a9cc5', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:19', '2023-04-30 18:24:19'),
(60, 'App\\Models\\User', 5, 'auth_token', '199719b704f3cccf816390c35e046c983f1766d2056a8c36b034fd6298859e65', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:19', '2023-04-30 18:24:19'),
(61, 'App\\Models\\User', 5, 'auth_token', 'f86ef6807b00a337d890920196dea53abe67f776d14b3c8517c017303b946561', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:19', '2023-04-30 18:24:19'),
(62, 'App\\Models\\User', 5, 'auth_token', '008e3eaa98b7bf10856d6ccdc579a4f866c67d173b8c3b4f0d103c816723cde0', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:20', '2023-04-30 18:24:20'),
(63, 'App\\Models\\User', 5, 'auth_token', '39809ccab3a9125e7bd6e1f4edc42a5fe338248e1535fdf57ab1c8de27c01c3a', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:20', '2023-04-30 18:24:20'),
(64, 'App\\Models\\User', 5, 'auth_token', 'e4e7b7e3a2341426a264589a293ebae535dd749eec89de671f001c8f9de122d5', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:20', '2023-04-30 18:24:20'),
(65, 'App\\Models\\User', 5, 'auth_token', 'c570b76617915247b9a77145e358700946a8a4cba3c3dd67c59f139ef1d97712', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:21', '2023-04-30 18:24:21'),
(66, 'App\\Models\\User', 5, 'auth_token', '39e872da1ee25a271d0022478998507f12611a847ea3618bfa10a641ef18386a', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:22', '2023-04-30 18:24:22'),
(67, 'App\\Models\\User', 5, 'auth_token', '6dbb02526d7cc024a0c3af283de9a0a1b80fac4ace93fbe8c44655fda23a4e9d', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:22', '2023-04-30 18:24:22'),
(68, 'App\\Models\\User', 5, 'auth_token', 'b53d49f201e6f6c2d1785bf638af29ed93e7f67c21ae8b4fe1dd5c62c3da9669', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:22', '2023-04-30 18:24:22'),
(69, 'App\\Models\\User', 5, 'auth_token', 'd716570f10689f9a305e5f6486351c4f23ad70459f5b5c39cfe3e4bd79656e6b', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:23', '2023-04-30 18:24:23'),
(70, 'App\\Models\\User', 5, 'auth_token', '20835f8f560ecb171699dfd531e816bb391d788eeb0558f27f8f2e3a2590eba0', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:23', '2023-04-30 18:24:23'),
(71, 'App\\Models\\User', 5, 'auth_token', '5137e0d20f12576755f88651bf7a305e831697323e6b7e38b6a6dcafbe59fedb', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:23', '2023-04-30 18:24:23'),
(72, 'App\\Models\\User', 5, 'auth_token', '087362885960e59722695518d93942c5162aee899cc399b8e00577e1ef2f07fb', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:24', '2023-04-30 18:24:24'),
(73, 'App\\Models\\User', 5, 'auth_token', 'aa05884eb7ec2b9009c9d7d8b3a3e9f7aa37f8282830db2bd8f77c0a580fa2fb', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:24', '2023-04-30 18:24:24'),
(74, 'App\\Models\\User', 5, 'auth_token', '6514f9b3dae99a070cfc4122028989aa56b0830fdbdb7a8a4a63cc9e27f4d4f0', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:24', '2023-04-30 18:24:24'),
(75, 'App\\Models\\User', 5, 'auth_token', '4c19478a1061629d8a8fe1d4dc90e1065b134d4653d460aac59a57a869a2db8d', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:24', '2023-04-30 18:24:24'),
(76, 'App\\Models\\User', 5, 'auth_token', 'aeff0d4767942e6546d305949a04959329c6e933255ed64696ac8eb3dc242a17', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:25', '2023-04-30 18:24:25'),
(77, 'App\\Models\\User', 5, 'auth_token', '0cb98f159bbac8b45498f683e8f1513b45ff3762df23f77c475ceff7189718c9', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:25', '2023-04-30 18:24:25'),
(78, 'App\\Models\\User', 5, 'auth_token', '1d861b09ef14f2e556f09f9d344ec07e8a4c459fb3794c032161429b1c67aa0c', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:25', '2023-04-30 18:24:25'),
(79, 'App\\Models\\User', 5, 'auth_token', 'b8aa6cede7d9682b80365482b376b1d97bbb063bebd48487e6ca239937ee984f', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:28', '2023-04-30 18:24:28'),
(80, 'App\\Models\\User', 5, 'auth_token', 'eaff5697c8bdc6bde12029444988149da603dacac2b578a9040407d44165488a', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:28', '2023-04-30 18:24:28'),
(81, 'App\\Models\\User', 5, 'auth_token', '9b57f2e099e1829b6743bc56ce537b9e0b7e508abac992a98153091da596ff8f', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:28', '2023-04-30 18:24:28'),
(82, 'App\\Models\\User', 5, 'auth_token', '3b04d14bd405024a728abf55bf168b3eb7a0f41974767b43c7bf615e196a0b32', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:29', '2023-04-30 18:24:29'),
(83, 'App\\Models\\User', 5, 'auth_token', '7a0e15fc248c67d1dc6addd47877b8de61485d09965eb438220a720f2ec06f7d', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:29', '2023-04-30 18:24:29'),
(84, 'App\\Models\\User', 5, 'auth_token', '6de3a24553ead8fe0a92234f2294366de9d927de6927281e6e2cff914594c475', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:29', '2023-04-30 18:24:29'),
(85, 'App\\Models\\User', 5, 'auth_token', '2642b1eb6d7064bce9998b982cdbcb97413a9fb9f63c3b03e5f2bded613230e1', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:30', '2023-04-30 18:24:30'),
(86, 'App\\Models\\User', 5, 'auth_token', '91f34803059a6da313e2c099e88302313f882bc85d58ec474ae793534a83866f', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:30', '2023-04-30 18:24:30'),
(87, 'App\\Models\\User', 5, 'auth_token', 'd6040bd6f2113ee97a27be8f2a0807df9c5d2f04907b3e99d8c83c4ab9231868', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:30', '2023-04-30 18:24:30'),
(88, 'App\\Models\\User', 5, 'auth_token', '50229a0875c6034f55fff79ddf0af99653a83c7f3a9699732b7dc13a52119b87', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:31', '2023-04-30 18:24:31'),
(89, 'App\\Models\\User', 5, 'auth_token', '46a2ae89853c644a6d1ad9adc0c40d9bb02570a61fe0194e52960f92eadbbc2b', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:31', '2023-04-30 18:24:31'),
(90, 'App\\Models\\User', 5, 'auth_token', 'd76687ca51b491b48d577311b430fcbfa7e1acbf48102444921a188d8004f0d5', '[\"*\"]', NULL, NULL, '2023-04-30 18:24:31', '2023-04-30 18:24:31'),
(91, 'App\\Models\\User', 5, 'auth_token', '27e0194f6694bd67c6eb35233b3729d0aad75eea1e52a914c098c7ad985a050b', '[\"*\"]', NULL, NULL, '2023-04-30 18:26:01', '2023-04-30 18:26:01'),
(92, 'App\\Models\\User', 5, 'auth_token', '411510051b518dbd6c96177f3c8442ee529e4f32446adafecdf76e9cfffbc7bc', '[\"*\"]', NULL, NULL, '2023-04-30 18:29:33', '2023-04-30 18:29:33'),
(93, 'App\\Models\\User', 8, 'SuperSecureToken$', '9055252d89421998d0f4146de35969a982458f4eef705f71301b81e760f94bd2', '[\"*\"]', NULL, NULL, '2023-05-03 04:34:34', '2023-05-03 04:34:34'),
(94, 'App\\Models\\User', 8, 'SuperSecureToken$', '25b4e5c5b001d2d0111b3e1261b3e5b3e06c88c3773acfb9f714c1cf38b8c216', '[\"*\"]', NULL, NULL, '2023-05-03 04:35:09', '2023-05-03 04:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `vendor_id` int(10) UNSIGNED DEFAULT NULL,
  `QOH` int(10) UNSIGNED DEFAULT 0,
  `price` decimal(13,2) DEFAULT 0.00,
  `prod_description` varchar(128) DEFAULT NULL,
  `gender` varchar(16) DEFAULT NULL,
  `img_name` varchar(64) DEFAULT NULL,
  `ts` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `vendor_id`, `QOH`, `price`, `prod_description`, `gender`, `img_name`, `ts`) VALUES
(1, 111, 42, '24.99', 'Regular Fit T-Shirt', 'MensShirts', 'mens-shirt.jpg', '2023-04-25 22:08:07'),
(2, 444, 78, '39.99', 'Checkered Button-up', 'MensShirts', 'mens-shirt1.jpg', '2023-05-03 01:09:43'),
(3, 333, 52, '29.99', 'White Shirt', 'MensShirts', 'mens-shirt2.jpg', '2023-05-03 01:10:24'),
(4, 222, 31, '19.99', 'Off-White T-Shirt', 'MensShirts', 'mens-shirt3.jpg', '2023-05-03 01:11:24'),
(5, 111, 67, '39.99', 'Black T-Shirt', 'MensShirts', 'mens-shirt4.jpg', '2023-05-03 01:11:43'),
(6, 444, 24, '29.99', 'Blue T-Shirt', 'MensShirts', 'mens-shirt5.jpg', '2023-05-03 01:11:53'),
(7, 444, 45, '69.99', 'Regular Fit Khaki Pants', 'MensPants', 'mens-pants.jpg', '2023-04-25 22:08:07'),
(8, 111, 52, '49.99', 'Black Training Pants', 'MensPants', 'mens-pants1.jpg', '2023-04-25 22:08:07'),
(9, 333, 33, '29.99', 'Denim Shorts', 'MensPants', 'mens-pants2.jpg', '2023-04-25 22:08:07'),
(10, 444, 58, '79.99', 'Gray Pants', 'MensPants', 'mens-pants3.jpg', '2023-04-25 22:08:07'),
(11, 222, 21, '49.99', 'Black Cargo Pants', 'MensPants', 'mens-pants4.jpg', '2023-04-25 22:08:07'),
(12, 444, 44, '55.99', 'Medium Jeans', 'MensPants', 'mens-pants5.jpg', '2023-04-25 22:08:07'),
(13, 111, 50, '149.99', 'Red Running Shoes', 'MensFootwear', 'mens-shoes.jpg', '2023-04-25 22:08:07'),
(14, 222, 39, '109.99', 'Gray Classics Shoes', 'MensFootwear', 'mens-shoes1.jpg', '2023-04-25 22:08:07'),
(15, 333, 60, '69.99', 'Brown Leather Casual Shoes', 'MensFootwear', 'mens-shoes2.jpg', '2023-04-25 22:08:07'),
(16, 222, 25, '129.99', 'Multicolor Comfort Shoes', 'MensFootwear', 'mens-shoes3.jpg', '2023-04-25 22:08:07'),
(17, 222, 37, '79.99', 'Grey Suede Comfort Shoes', 'MensFootwear', 'mens-shoes4.jpg', '2023-04-25 22:08:07'),
(18, 333, 42, '59.99', 'White Walking Shoes', 'MensFootwear', 'mens-shoes5.jpg', '2023-04-25 22:08:07'),
(19, 444, 43, '49.99', 'Light Blue Collar Blouse', 'WomensShirts', 'womens-shirt.jpg', '2023-04-25 22:09:48'),
(20, 111, 36, '19.99', 'White Graphic T-Shirt', 'WomensShirts', 'womens-shirt1.jpg', '2023-04-25 22:09:48'),
(21, 333, 24, '22.99', 'Crop Top Shirt', 'WomensShirts', 'womens-shirt2.jpg', '2023-04-25 22:09:48'),
(22, 111, 56, '14.99', 'Red Graphic T-Shirt', 'WomensShirts', 'womens-shirt3.jpg', '2023-04-25 22:09:48'),
(23, 222, 63, '29.99', 'White Lightweight Shirt', 'WomensShirts', 'womens-shirt4.jpg', '2023-04-25 22:09:48'),
(24, 444, 12, '23.99', 'White Printed Shirt', 'WomensShirts', 'womens-shirt5.jpg', '2023-04-25 22:09:48'),
(25, 444, 75, '49.99', 'Loose Fit Pants', 'WomensPants', 'womens-pants.jpg', '2023-04-25 22:09:48'),
(26, 222, 59, '59.99', 'Dark Pants', 'WomensPants', 'womens-pants1.jpg', '2023-04-25 22:09:48'),
(27, 333, 42, '29.99', 'Graphic Print Yoga Pants', 'WomensPants', 'womens-pants2.jpg', '2023-04-25 22:09:48'),
(28, 444, 67, '39.99', 'Light Jeans', 'WomensPants', 'womens-pants3.jpg', '2023-04-25 22:09:48'),
(29, 333, 22, '49.99', 'Off White Dress', 'WomensPants', 'womens-pants4.jpg', '2023-04-25 22:09:48'),
(30, 111, 31, '39.99', 'Black Yoga Pants', 'WomensPants', 'womens-pants5.jpg', '2023-04-25 22:09:48'),
(31, 111, 48, '149.99', 'Multicolor Sneaker', 'WomensFootwear', 'womens-shoes.jpg', '2023-04-25 22:09:48'),
(32, 222, 56, '74.99', 'Pink Classics', 'WomensFootwear', 'womens-shoes1.jpg', '2023-04-25 22:09:48'),
(33, 333, 19, '49.99', 'Training Shoes', 'WomensFootwear', 'womens-shoes2.jpg', '2023-04-25 22:09:48'),
(34, 444, 33, '79.99', 'Pink Platform Oxford', 'WomensFootwear', 'womens-shoes3.jpg', '2023-04-25 22:09:48'),
(35, 444, 52, '119.99', 'Gray Boots', 'WomensFootwear', 'womens-shoes4.jpg', '2023-04-25 22:09:48'),
(36, 222, 65, '69.99', 'Classic White Sneakers', 'WomensFootwear', 'womens-shoes5.jpg', '2023-04-25 22:09:48');

-- --------------------------------------------------------

--
-- Table structure for table `product_cat_joins`
--

CREATE TABLE `product_cat_joins` (
  `prod_id` int(10) UNSIGNED NOT NULL,
  `cat_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_cat_joins`
--

INSERT INTO `product_cat_joins` (`prod_id`, `cat_id`) VALUES
(1, 10),
(2, 10),
(3, 10),
(4, 10),
(5, 10),
(6, 10),
(7, 20),
(8, 20),
(9, 20),
(10, 20),
(11, 20),
(12, 20),
(13, 30),
(14, 30),
(15, 30),
(16, 30),
(17, 30),
(18, 30),
(19, 40),
(20, 40),
(21, 40),
(22, 40),
(23, 40),
(24, 40),
(25, 50),
(26, 50),
(27, 50),
(28, 50),
(29, 50),
(30, 50),
(31, 60),
(32, 60),
(33, 60),
(34, 60),
(35, 60),
(36, 60);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Name One', 'email1@email.com', NULL, '$2y$10$C9gVrQVzfqqt6sJ8ePbCRea7lE23.tx.HQ2cxw1Cpik/sNriyGxgS', NULL, '2023-04-28 00:34:36', '2023-04-28 00:34:36'),
(3, 'Name2', 'email2@email.com', NULL, '$2y$10$VvxxexpS93b1fGWoLRs5L.9muOUAG6baD0GBJbAyc4w4237RWzA5K', NULL, '2023-04-30 12:49:40', '2023-04-30 12:49:40'),
(4, 'Name Three', 'email3@email.com', NULL, '$2y$10$A15HjizaEzlY8eNgJBt42Ol9KjxkiKHcORPuka8AZcz/0GoRmjpaS', NULL, '2023-04-30 12:52:12', '2023-04-30 12:52:12'),
(5, 'Name Four', 'email4@email.com', NULL, '$2y$10$kGoVdTN4px/39SxTnnD41eHl9I6IB42a81fGsuYS/599YpfoWpOAm', NULL, '2023-04-30 14:07:58', '2023-04-30 14:07:58'),
(6, 'Name Five', 'email5@email.com', NULL, '$2y$10$OL65JUSKTYmy1FuavpnNg.caEXdOwTN0JG0jUDwEwss1VFCcqJJLq', NULL, '2023-04-30 17:58:33', '2023-04-30 17:58:33'),
(7, 'Name Six', 'email6@email.com', NULL, '$2y$10$8qRiEFgvfgjCAFL0yI7MZ.So4.Y0xop2ctjNRauJ3xAAtVmqYUkqa', NULL, '2023-04-30 17:59:48', '2023-04-30 17:59:48'),
(8, 'Name123', 'email@gmail.com', NULL, '$2y$10$ODns3WAZj0AxlnGpRqC1Au1ES3ODzMhP7ga/RXqqg5Ds133.SEPVC', NULL, '2023-05-03 04:34:34', '2023-05-03 04:34:34');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `vend_name` varchar(64) NOT NULL,
  `vend_address` varchar(64) NOT NULL,
  `vend_city` varchar(64) NOT NULL,
  `vend_state` varchar(64) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `phone` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `user_id`, `vend_name`, `vend_address`, `vend_city`, `vend_state`, `zip`, `phone`) VALUES
(111, 1, 'Nike', '123 Oak Street', 'Pittsburgh', 'PA', '15666', '5555555555'),
(222, 2, 'New Balance', '456 Maple Street', 'New York', 'NY', '10001', '5555555555'),
(333, 3, 'Adidas', '789 Pine Street', 'Los Angeles', 'CA', '90001', '5555555555'),
(444, 4, 'Columbia', '321 Palm Street', 'Miami', 'FL', '33101', '5555555555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `items_in_cart`
--
ALTER TABLE `items_in_cart`
  ADD PRIMARY KEY (`user_id`,`prod_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_products_join`
--
ALTER TABLE `order_products_join`
  ADD PRIMARY KEY (`ord_id`,`prod_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor_id` (`vendor_id`),
  ADD KEY `ts` (`ts`),
  ADD KEY `price` (`price`);

--
-- Indexes for table `product_cat_joins`
--
ALTER TABLE `product_cat_joins`
  ADD PRIMARY KEY (`prod_id`,`cat_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1237;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items_in_cart`
--
ALTER TABLE `items_in_cart`
  ADD CONSTRAINT `items_in_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `items_in_cart_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_products_join`
--
ALTER TABLE `order_products_join`
  ADD CONSTRAINT `order_products_join_ibfk_1` FOREIGN KEY (`ord_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_products_join_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`);

--
-- Constraints for table `product_cat_joins`
--
ALTER TABLE `product_cat_joins`
  ADD CONSTRAINT `product_cat_joins_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_cat_joins_ibfk_2` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
