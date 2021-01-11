-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Хост: srv-pleskdb18.ps.kz:3306
-- Время создания: Янв 11 2021 г., 08:43
-- Версия сервера: 10.2.36-MariaDB-log
-- Версия PHP: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `weplayk1_multymodal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `address`
--

CREATE TABLE `address` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `address`
--

INSERT INTO `address` (`id`, `title`, `created_at`, `updated_at`) VALUES
(2, 'РК, г.Нур-Султан, Район Есиль, ул. Д.Кунаева Дом 10, Бизнес - Центр \"Emerald Tower\"', '2021-01-01 12:27:23', '2021-01-01 13:18:02');

-- --------------------------------------------------------

--
-- Структура таблицы `direction`
--

CREATE TABLE `direction` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `direction`
--

INSERT INTO `direction` (`id`, `title`, `img`, `description`, `created_at`, `updated_at`) VALUES
(5, 'Предоставление подвижного состава в аренду или субаренду на долгосрочной основе', '/assets/uploads/predostavlenie-podviznogo-sostava-v-arendu-ili-subarendu-na-dolgosrocnoi-osnovech1rS.jpg', '<p>•прием, отправление и переадресация вагонов, полувагонов и платформ;</p><p>•эксплуатация ж/д путей необщего пользования</p>', '2021-01-01 05:46:15', '2021-01-01 05:46:15'),
(6, 'Предоставление подвижного состава в оперирование и на технический рейс', '/assets/uploads/predostavlenie-podviznogo-sostava-v-operirovanie-i-na-texniceskii-reisGStIx.jpg', '<ul><li>оперирование парком собственных и арендованных вагонов;</li><li>услуги диспетчерского центра (онлайн-слежение за вагонами в пути следования</li></ul>', '2021-01-01 05:48:55', '2021-01-01 05:48:55'),
(7, 'Предоставление транспортно-экспедиторских услуг', '/assets/uploads/predostavlenie-transportno-ekspeditorskix-uslugQwirA.jpg', '<ul><li>оплата железнодорожного тарифа во внутриреспубликанском, экспортно-импортном, транзитном сообщениях стран СНГ и дальнего зарубежья, а также дополнительных сборов;</li><li>предоставление транзитных кодов по территории РК;</li><li>организация контейнерных перевозок транзитом через Республику Казахстан по направлениям Средней Азии и Европы</li></ul>', '2021-01-01 05:50:07', '2021-01-01 05:51:54');

-- --------------------------------------------------------

--
-- Структура таблицы `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `email`
--

CREATE TABLE `email` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `email`
--

INSERT INTO `email` (`id`, `email`, `created_at`, `updated_at`) VALUES
(1, 'info@1mc.kz', '2021-01-01 13:19:33', '2021-01-01 13:19:33');

-- --------------------------------------------------------

--
-- Структура таблицы `emails`
--

CREATE TABLE `emails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `emails`
--

INSERT INTO `emails` (`id`, `surname`, `name`, `email`, `phone`, `message`, `created_at`, `updated_at`) VALUES
(1, '213123', '123123', 'admin@gmail.com', '123123', '123123', '2021-01-01 06:57:13', '2021-01-01 06:57:13'),
(2, 'Валерий', 'admin', 'mistier.famous@gmail.com', '+7(770)112-32-32', '\"әі\"әі\"әі', '2021-01-01 06:58:17', '2021-01-01 06:58:17'),
(3, '123123', '123123', 'admin@mail.ru', '123123', '123123', '2021-01-01 07:01:28', '2021-01-01 07:01:28'),
(4, '32423', 'admin', 'admin@gmail.com', '+7(770)112-32-32', 'wqeqwe', '2021-01-01 07:05:00', '2021-01-01 07:05:00');

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `headers`
--

CREATE TABLE `headers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `headers`
--

INSERT INTO `headers` (`id`, `phone`, `email`, `created_at`, `updated_at`) VALUES
(3, '+77172611630', 'info@1mc.kz', '2021-01-01 05:23:17', '2021-01-01 05:23:17'),
(5, '+77172611632', NULL, '2021-01-01 12:28:34', '2021-01-01 12:28:34');

-- --------------------------------------------------------

--
-- Структура таблицы `headings`
--

CREATE TABLE `headings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `section` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `headings`
--

INSERT INTO `headings` (`id`, `title`, `subtitle`, `section`, `created_at`, `updated_at`) VALUES
(18, 'ТОО «Первая Мультимодальная Компания»', 'Частная казахстанская компания выступающая в роли оператора подвижного состава, под управлением которого находятся собственный и арендованный парк вагонов, осуществляющая мультимодальные перевозки различных грузов, предлагающая доступные цены, индивидуальный подход и всесторонний сервис в пути следования и на месте назначения, предлагающая доступные цены, индивидуальный подход и всесторонний сервис в пути следования и на месте назначения', '1', '2021-01-01 05:07:12', '2021-01-01 12:23:17'),
(19, 'Направления', 'Компания  предлагает следующие виды услуг (В2В) и разновидности логистического сервиса:', '2', '2021-01-01 05:31:32', '2021-01-01 05:31:32'),
(20, 'Руководство и Команда', 'Мы - команда единомышленников, объединенная общими целями и задачами, пропагандирующая одинаковые ценности, близкая по духу. Мы стремимся к лидерству и работаем для достижения наилучшего результата', '3', '2021-01-01 12:51:24', '2021-01-01 12:51:24'),
(21, 'НАПИШИТЕ НАМ', 'НАДЕЕМСЯ НА ВЗАИМОВЫГОДНОЕ СОТРУДНИЧЕСТВО И БУДЕМ РАДЫ ОТВЕТИТЬ НА ВАШИ ВОПРОСЫ', '6', '2021-01-01 13:21:10', '2021-01-01 13:21:10');

-- --------------------------------------------------------

--
-- Структура таблицы `managers`
--

CREATE TABLE `managers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `managers`
--

INSERT INTO `managers` (`id`, `name`, `job`, `img`, `description`, `created_at`, `updated_at`) VALUES
(5, 'Исмагулов Канат Жандарбекулы', 'Генеральный директор MBA, DBA', '/assets/uploads/ismagulov-kanat-zandarbekulyoQLpQ.png', 'Родился в 1981 году в Акмолинской области (г.Нур-Султан). Отвечает за общее руководство деятельностью компании и достижение стратегических показателей. Женат, воспитывает 4-х детей. Активно поддерживает спорт и спортивный образ жизни, обучение и менторство.', '2021-01-01 12:49:55', '2021-01-01 12:49:55'),
(6, 'Маусымбаев Жандос Айдарбекович', 'Заместитель генерального директора по логистике и коммерции.', '/assets/uploads/mausymbaev-zandos-aidarbekovicEBrS5.png', 'Дата рождения: 10.03.1985Место рождения: Казахская ССР, Семипалатинская область, г. Аягоз; Отвечает за основную деятельность компании. Женат, воспитывает 3-х сыновей. Увлечения: спорт, книги, конный спорт.', '2021-01-01 12:50:55', '2021-01-01 12:50:55');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_12_30_073615_create_seo_table', 2),
(5, '2020_12_30_075250_create_headers_table', 3),
(6, '2020_12_30_080326_create_headings_table', 4),
(7, '2020_12_30_082205_create_sections_table', 5),
(8, '2020_12_30_090909_create_parallax_table', 6),
(9, '2020_12_30_100157_create_direction_table', 7),
(10, '2020_12_30_101911_create_managers_table', 8),
(11, '2020_12_30_103538_create_partners_table', 9),
(12, '2020_12_30_105218_create_documents_table', 10),
(13, '2020_12_30_110920_create_address_table', 11),
(14, '2020_12_30_123210_create_phone_table', 12),
(15, '2020_12_30_123704_create_time_table', 13),
(16, '2020_12_30_124152_create_email_table', 14),
(17, '2021_01_01_123255_create_emails_table', 15);

-- --------------------------------------------------------

--
-- Структура таблицы `parallax`
--

CREATE TABLE `parallax` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `parallax`
--

INSERT INTO `parallax` (`id`, `img`, `created_at`, `updated_at`) VALUES
(7, '/assets/uploads/Aijb7j3ZPF6x86L.jpg', '2021-01-01 05:10:06', '2021-01-01 05:10:06');

-- --------------------------------------------------------

--
-- Структура таблицы `partners`
--

CREATE TABLE `partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `partners`
--

INSERT INTO `partners` (`id`, `img`, `link`, `created_at`, `updated_at`) VALUES
(13, '/assets/uploads/FropQJfTlQ0a7dz.png', NULL, '2021-01-01 13:08:23', '2021-01-01 13:08:23'),
(14, '/assets/uploads/lUgAnHbzv66J6fE.png', NULL, '2021-01-01 13:08:32', '2021-01-01 13:08:32'),
(15, '/assets/uploads/GSr48C74sGu66MG.png', NULL, '2021-01-01 13:08:41', '2021-01-01 13:08:41'),
(16, '/assets/uploads/qybl3afmgQfiVh7.png', NULL, '2021-01-01 13:08:50', '2021-01-01 13:08:50'),
(18, '/assets/uploads/yAb2T5Vhhzn9JCk.png', NULL, '2021-01-01 13:09:19', '2021-01-01 13:09:19'),
(19, '/assets/uploads/mFq5GLy1O4WxXnq.png', NULL, '2021-01-01 13:09:27', '2021-01-01 13:09:27'),
(22, '/assets/uploads/GbdCCMrdt3VsDTN.png', NULL, '2021-01-01 13:10:26', '2021-01-01 13:10:26');

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `phone`
--

CREATE TABLE `phone` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `phone`
--

INSERT INTO `phone` (`id`, `phone`, `created_at`, `updated_at`) VALUES
(2, '+77172611630', '2021-01-01 13:18:45', '2021-01-01 13:18:45'),
(3, '+77172611632', '2021-01-01 13:19:20', '2021-01-01 13:19:20');

-- --------------------------------------------------------

--
-- Структура таблицы `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sections`
--

INSERT INTO `sections` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Главная', NULL, NULL),
(2, 'Направления', NULL, NULL),
(3, 'Руководство', NULL, NULL),
(4, 'Партнеры', NULL, NULL),
(5, 'Документы', NULL, NULL),
(6, 'Контакты', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `seo`
--

CREATE TABLE `seo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `seo`
--

INSERT INTO `seo` (`id`, `title`, `keywords`, `description`, `author`, `created_at`, `updated_at`) VALUES
(4, 'ТОО «Первая Мультимодальная Компания»', 'ТОО «Первая Мультимодальная Компания»', 'ТОО «Первая Мультимодальная Компания» - - частная казахстанская компания выступающая в роли оператора подвижного состава, под управлением которого находятся собственный и арендованный парк вагонов,осуществляющая мультимодальные перевозки различных грузов', 'ТОО «Первая Мультимодальная Компания»', '2021-01-01 13:23:08', '2021-01-01 13:23:08');

-- --------------------------------------------------------

--
-- Структура таблицы `time`
--

CREATE TABLE `time` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$UkaXeSciJd0U6ilAQUQhuO7cz0t335Mhhu2oCcINrp9r4Rf2TUz9y', 'LWRsQv9Okv99fQLaDHpAq07EZZ49LHxTWaA4LvaLI9XCir0VfqdyOhp5q0s0', NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `direction`
--
ALTER TABLE `direction`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `headers`
--
ALTER TABLE `headers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `headings`
--
ALTER TABLE `headings`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `parallax`
--
ALTER TABLE `parallax`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `seo`
--
ALTER TABLE `seo`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `address`
--
ALTER TABLE `address`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `direction`
--
ALTER TABLE `direction`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `email`
--
ALTER TABLE `email`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `emails`
--
ALTER TABLE `emails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `headers`
--
ALTER TABLE `headers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `headings`
--
ALTER TABLE `headings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `managers`
--
ALTER TABLE `managers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `parallax`
--
ALTER TABLE `parallax`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `phone`
--
ALTER TABLE `phone`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `seo`
--
ALTER TABLE `seo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `time`
--
ALTER TABLE `time`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
