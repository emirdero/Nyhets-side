-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 24, 2019 at 01:06 AM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

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

--
-- Dumping data for table `artikkel`
--

INSERT INTO `artikkel` (`artikkelId`, `overskrift`, `innhold`, `fultInnhold`, `innleggelseTid`, `bilde`, `bildeAlt`, `kategoriId`, `viktighet`, `likes`) VALUES
(1, 'Ugler i mosen', 'Rapporter hevder eksperter har funnet ugler lokalisert i mosen', 'Senectus et netus et malesuada fames ac turpis egestas. Vitae turpis massa sed elementum tempus egestas sed. Tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim sodales ut eu sem integer vitae. Porttitor eget dolor morbi non arcu risus. Turpis massa tincidunt dui ut. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam lacus suspendisse faucibus interdum posuere lorem. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit. Urna id volutpat lacus laoreet non curabitur gravida arcu. Integer vitae justo eget magna fermentum iaculis eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat pretium nibh ipsum consequat nisl. Erat pellentesque adipiscing commodo elit.', '2019-09-09 10:31:39', 'https://www.skeidar.no/globalassets/2002/produkter/innredning/dekor/bilder-og-galleri/102089_000_0013.png?w=375&quality=75&format=jpg', 'Ugle', 2, 1, 0),
(2, 'kule sykler 2019', 'Sykkel 1: diamant sykkeler er kule\n Sykkel 2: DBS sin nye sykkel sikkert', 'Senectus et netus et malesuada fames ac turpis egestas. Vitae turpis massa sed elementum tempus egestas sed. Tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim sodales ut eu sem integer vitae. Porttitor eget dolor morbi non arcu risus. Turpis massa tincidunt dui ut. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam lacus suspendisse faucibus interdum posuere lorem. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit. Urna id volutpat lacus laoreet non curabitur gravida arcu. Integer vitae justo eget magna fermentum iaculis eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat pretium nibh ipsum consequat nisl. Erat pellentesque adipiscing commodo elit.', '2019-09-09 10:54:56', 'https://bikeshop.no/Media/Cache/Images/1/1/WEB_Image%20Creme%20Cycles%20Caferacer%20Man%20Solo%20Sykkel%20A%20nycreme003-black826659460.Jpeg', 'Diamant sykkel', 1, 1, 0),
(3, 'kule sykler 2019', 'Sykkel 1: diamant sykkeler er kule\n Sykkel 2: DBS sin nye sykkel sikkert', 'Senectus et netus et malesuada fames ac turpis egestas. Vitae turpis massa sed elementum tempus egestas sed. Tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim sodales ut eu sem integer vitae. Porttitor eget dolor morbi non arcu risus. Turpis massa tincidunt dui ut. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam lacus suspendisse faucibus interdum posuere lorem. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit. Urna id volutpat lacus laoreet non curabitur gravida arcu. Integer vitae justo eget magna fermentum iaculis eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat pretium nibh ipsum consequat nisl. Erat pellentesque adipiscing commodo elit.', '2019-09-09 12:22:51', 'https://bikeshop.no/Media/Cache/Images/1/1/WEB_Image%20Creme%20Cycles%20Caferacer%20Man%20Solo%20Sykkel%20A%20nycreme003-black826659460.Jpeg', 'Sykkel', 1, 1, 0),
(4, 'kule sykler 2019', 'Sykkel 1: diamant sykkeler er kule\n Sykkel 2: DBS sin nye sykkel sikkert', 'Senectus et netus et malesuada fames ac turpis egestas. Vitae turpis massa sed elementum tempus egestas sed. Tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim sodales ut eu sem integer vitae. Porttitor eget dolor morbi non arcu risus. Turpis massa tincidunt dui ut. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam lacus suspendisse faucibus interdum posuere lorem. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit. Urna id volutpat lacus laoreet non curabitur gravida arcu. Integer vitae justo eget magna fermentum iaculis eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat pretium nibh ipsum consequat nisl. Erat pellentesque adipiscing commodo elit.', '2019-09-09 12:29:27', 'https://bikeshop.no/Media/Cache/Images/1/1/WEB_Image%20Creme%20Cycles%20Caferacer%20Man%20Solo%20Sykkel%20A%20nycreme003-black826659460.Jpeg', 'Sykkel', 1, 1, 2),
(6, 'Mye bra buisness gjennomført i dag', 'Mange mennesker hilste på hverander i dag, noe som førte til at store summer penger ble tjent.', 'Senectus et netus et malesuada fames ac turpis egestas. Vitae turpis massa sed elementum tempus egestas sed. Tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim sodales ut eu sem integer vitae. Porttitor eget dolor morbi non arcu risus. Turpis massa tincidunt dui ut. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam lacus suspendisse faucibus interdum posuere lorem. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit. Urna id volutpat lacus laoreet non curabitur gravida arcu. Integer vitae justo eget magna fermentum iaculis eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat pretium nibh ipsum consequat nisl. Erat pellentesque adipiscing commodo elit.', '2019-10-27 13:54:41', 'https://previews.123rf.com/images/elwynn/elwynn1404/elwynn140400042/27256544-business-woman-and-man-shake-hands-full-length-portrait-isolated-on-white-background-.jpg', 'to folk som håndhilser', 2, 1, 1),
(7, 'Mann danser med stor hatt', 'Jeg liker hatten hans', 'Senectus et netus et malesuada fames ac turpis egestas. Vitae turpis massa sed elementum tempus egestas sed. Tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim sodales ut eu sem integer vitae. Porttitor eget dolor morbi non arcu risus. Turpis massa tincidunt dui ut. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam lacus suspendisse faucibus interdum posuere lorem. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit. Urna id volutpat lacus laoreet non curabitur gravida arcu. Integer vitae justo eget magna fermentum iaculis eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Feugiat pretium nibh ipsum consequat nisl. Erat pellentesque adipiscing commodo elit.', '2019-10-27 13:57:21', 'https://st2.depositphotos.com/3550309/11084/i/950/depositphotos_110843442-stock-photo-man-with-beautiful-large-hat.jpg', 'mann med hatt', 3, 1, 2),
(10, 'Hvor er jeg', 'Jeg tror jeg har landet i en nettside', 'Leo urna molestie at elementum eu facilisis sed. Lacus suspendisse faucibus interdum posuere lorem ipsum. Sit amet nulla facilisi morbi. Maecenas ultricies mi eget mauris pharetra et ultrices. Nulla pellentesque dignissim enim sit amet. ', '2019-10-27 21:31:52', 'https://s3.amazonaws.com/tinycards/image/8148e3010be4c85662e7802025a66835', 'waldo ser på et kart', 3, 3, 0),
(18, 'Kongen døde', 'RIP', 'Nisi porta lorem mollis aliquam ut. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tincidunt id aliquet risus feugiat in ante. Sed risus ultricies tristique nulla. Fermentum iaculis eu non diam. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Vestibulum morbi blandit cursus risus at ultrices mi tempus. In massa tempor nec feugiat nisl pretium fusce id. Semper risus in hendrerit gravida rutrum quisque non tellus. Lectus nulla at volutpat diam. Sed vulputate odio ut enim. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Cum sociis natoque penatibus et magnis dis parturient. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Sodales ut eu sem integer vitae justo. Lectus sit amet est placerat in egestas erat imperdiet. Egestas integer eget aliquet nibh praesent tristique magna sit amet.', '2019-10-27 21:48:55', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%27The_Dead_King_Christian_IV%27_by_Elias_Fiigenschou%2C_Bergen_Kunstmuseum.JPG/640px-%27The_Dead_King_Christian_IV%27_by_Elias_Fiigenschou%2C_Bergen_Kunstmuseum.JPG', 'En død konge ligger', 2, 2, 0),
(20, 'Emir er best', 'wow så kul', 'Augue interdum velit euismod in pellentesque massa. Elementum sagittis vitae et leo duis. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Suspendisse faucibus interdum posuere lorem ipsum. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Accumsan in nisl nisi scelerisque eu. Vitae aliquet nec ullamcorper sit amet risus nullam. Felis bibendum ut tristique et egestas quis ipsum. Mauris pellentesque pulvinar pellentesque habitant morbi. Et tortor consequat id porta nibh venenatis cras. Tortor posuere ac ut consequat. Vestibulum lectus mauris ultrices eros. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ornare suspendisse sed nisi lacus sed viverra. Orci eu lobortis elementum nibh.', '2019-10-27 21:58:00', 'https://previews.123rf.com/images/imagerymajestic/imagerymajestic0811/imagerymajestic081100638/3825934-cool-guy-showing-hand-gesture-against-white-background.jpg', 'kul type', 2, 1, 2),
(21, 'Javascript injection rammer siden!', 'Javascript fra andre kan kjøres på maskinen din om utvikleren ikke er forsiktig', 'Heldigvis er denne siden trygg <script>alert(\"sike!\")</script>', '2019-11-23 22:04:37', 'https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/358/2019/08/GettyImages-914818226-1024x677.jpg', 'En hacker', 2, 1, 0);

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`kategoriId`, `navn`) VALUES
(0, 'alle'),
(1, 'sport'),
(2, 'nyheter'),
(3, 'kultur');

--
-- Dumping data for table `kommentar`
--

INSERT INTO `kommentar` (`kommentarId`, `artikkelId`, `navn`, `innhold`, `likes`) VALUES
(1, 20, '\"Anonym\"', 'Wow, programmerte han denne helt selv?!', 2),
(2, 20, '\"mr bond, james bond\"', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1),
(5, 7, '\"Anonym\"', 'For en hatt!', 0),
(6, 4, '\"Anonym\"', 'Min sykkel er Diamant!', 0),
(31, 2, '\"Anonym\"', '<script>console.log(\"Denne siden er ikke sikker\")</script>', 0),
(32, 21, '\"Anonym\"', '<script>console.log(\"Kul artikkel! Skal være obs på dette i framtiden\")</script>', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
