<?php
/**
 * Konfigurasi dasar WordPress.
 *
 * Berkas ini berisi konfigurasi-konfigurasi berikut: Pengaturan MySQL, Awalan Tabel,
 * Kunci Rahasia, Bahasa WordPress, dan ABSPATH. Anda dapat menemukan informasi lebih
 * lanjut dengan mengunjungi Halaman Codex {@link http://codex.wordpress.org/Editing_wp-config.php
 * Menyunting wp-config.php}. Anda dapat memperoleh pengaturan MySQL dari web host Anda.
 *
 * Berkas ini digunakan oleh skrip penciptaan wp-config.php selama proses instalasi.
 * Anda tidak perlu menggunakan situs web, Anda dapat langsung menyalin berkas ini ke
 * "wp-config.php" dan mengisi nilai-nilainya.
 *
 * @package WordPress
 */

// ** Pengaturan MySQL - Anda dapat memperoleh informasi ini dari web host Anda ** //
/** Nama basis data untuk WordPress */
define( 'DB_NAME', 'wordpress' );

/** Nama pengguna basis data MySQL */
define( 'DB_USER', 'root' );

/** Kata sandi basis data MySQL */
define( 'DB_PASSWORD', '' );

/** Nama host MySQL */
define( 'DB_HOST', 'localhost' );

/** Set Karakter Basis Data yang digunakan untuk menciptakan tabel basis data. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Jenis Collate Basis Data. Jangan ubah ini jika ragu. */
define('DB_COLLATE', '');
/** Add here*/

define('FS_METHOD','direct');
define("FTP_HOST", "localhost");
define("FTP_USER", 'rohmad1230@gmail.com');
define("FTP_PASS", “admin”);
/** To here*/

/**#@+
 * Kunci Otentifikasi Unik dan Garam.
 *
 * Ubah baris berikut menjadi frase unik!
 * Anda dapat menciptakan frase-frase ini menggunakan {@link https://api.wordpress.org/secret-key/1.1/salt/ Layanan kunci-rahasia WordPress.org}
 * Anda dapat mengubah baris-baris berikut kapanpun untuk mencabut validasi seluruh cookies. Hal ini akan memaksa seluruh pengguna untuk masuk log ulang.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gNV*l>sm#YT@Rrdft;mt0Of=l.9&yD%zb_:D-7iM!_gk(|g/vD=wICUVJ ?v`2F/' );
define( 'SECURE_AUTH_KEY',  '=E(#Ko4k-Ydfow+/r3d`LWH&,!jpf-Za~E_on:Hu4y`%16`br<a{6Ir ?:=5CY`k' );
define( 'LOGGED_IN_KEY',    '8LDZqz&h+AcI6>tRpw<Y7DI0`/J#RSy CqxW2QaaOYZ#TOUu6LO5}?^6[8{:T~S&' );
define( 'NONCE_KEY',        '1GfKF1nHEP2NNdqwjtmt<SOG!fjXSfm;y}R/pEE_9#q>C)T;DxL]@;>.g(GwE[s7' );
define( 'AUTH_SALT',        'Zc?fm,%r%t1@<1TQ&T_%V[ASB/NO[Th!Un%H.`JX<<R?dME=bKOC8.L5tFxE)Q=p' );
define( 'SECURE_AUTH_SALT', '91@AZsr+;0S4-!pX%id#2nk*SXHR&forV*CAK=QZ)Rtx@I#Gm@uW}G0]B{*MO%:Z' );
define( 'LOGGED_IN_SALT',   'mG#l/Q [b$V1Tc4 K%+to3|IcgN1fwhQ=:^`JjH$C=%/p, ugvhnersL<S7R,P&V' );
define( 'NONCE_SALT',       'z4$8DX]|%+rsEKF7O@66K1ia< n^fKq,;1&G`38&UOUnkS~^G^ug?MZW[C?7nW/r' );

/**#@-*/

/**
 * Awalan Tabel Basis Data WordPress.
 *
 * Anda dapat memiliki beberapa instalasi di dalam satu basis data jika Anda memberikan awalan unik
 * kepada masing-masing tabel. Harap hanya masukkan angka, huruf, dan garis bawah!
 */
$table_prefix = 'wp_';

/**
 * Untuk pengembang: Moda pengawakutuan WordPress.
 *
 * Ubah ini menjadi "true" untuk mengaktifkan tampilan peringatan selama pengembangan.
 * Sangat disarankan agar pengembang plugin dan tema menggunakan WP_DEBUG
 * di lingkungan pengembangan mereka.
 */
define('WP_DEBUG', false);

/* Cukup, berhenti menyunting! Selamat ngeblog. */

/** Lokasi absolut direktori WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Menentukan variabel-variabel WordPress berkas-berkas yang disertakan. */
require_once(ABSPATH . 'wp-settings.php');
