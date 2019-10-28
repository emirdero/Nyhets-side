-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 28, 2019 at 04:39 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emirde`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikkel`
--

CREATE TABLE `artikkel` (
  `artikkelId` int(11) NOT NULL,
  `overskrift` text NOT NULL,
  `innhold` text NOT NULL,
  `innleggelseTid` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `bilde` text NOT NULL,
  `bildeAlt` text NOT NULL,
  `kategoriId` int(11) DEFAULT NULL,
  `viktighet` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artikkel`
--

INSERT INTO `artikkel` (`artikkelId`, `overskrift`, `innhold`, `innleggelseTid`, `bilde`, `bildeAlt`, `kategoriId`, `viktighet`) VALUES
(1, 'Ugler i mosen', 'Rapporter hevder eksperter har funnet ugler lokalisert i mosen', '2019-09-09 10:31:39', 'https://www.skeidar.no/globalassets/2002/produkter/innredning/dekor/bilder-og-galleri/102089_000_0013.png?w=375&quality=75&format=jpg', 'Ugle', 2, 0),
(2, 'kule sykler 2019', 'Sykkel 1: diamant sykkeler er kule\n Sykkel 2: DBS sin nye sykkel sikkert', '2019-09-09 10:54:56', 'https://bikeshop.no/Media/Cache/Images/1/1/WEB_Image%20Creme%20Cycles%20Caferacer%20Man%20Solo%20Sykkel%20A%20nycreme003-black826659460.Jpeg', 'Sykkel', 1, 0),
(3, 'Mye bra buisness gjennomført i dag', 'Mange mennesker hilste på hverander i dag, noe som førte til at store summer penger ble tjent.', '2019-10-27 13:54:41', 'https://previews.123rf.com/images/elwynn/elwynn1404/elwynn140400042/27256544-business-woman-and-man-shake-hands-full-length-portrait-isolated-on-white-background-.jpg', 'to folk som håndhilser', 2, 1),
(4, 'Man danser med stor hatt', 'Jeg liker hatten hans', '2019-10-27 13:57:21', 'https://st2.depositphotos.com/3550309/11084/i/950/depositphotos_110843442-stock-photo-man-with-beautiful-large-hat.jpg', 'man med hatt', 3, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikkel`
--
ALTER TABLE `artikkel`
  ADD PRIMARY KEY (`artikkelId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikkel`
--
ALTER TABLE `artikkel`
  MODIFY `artikkelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
