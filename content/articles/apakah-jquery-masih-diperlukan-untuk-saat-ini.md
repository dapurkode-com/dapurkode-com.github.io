---
title: Apakah jQuery masih diperlukan untuk saat ini?
image: /images/blog/greg-rakozy-vw3Ahg4x1tY-unsplash-1-1200x480.jpg
description: jQuery merupakan library javascript dan siapa yang tidak kenal dengan library ini? Hampir kebanyakan developer web, pastinya akan lebih memilih library ini untuk membantu pengolahan data html melalui DOM (Document Object Model). Tetapi sebelumnya, penulis sangat menghargai tim developer jQuery karena dalam satu dekade telah membantu banyak developer web (termasuk penulis) untuk berkarya. Berikut adalah alasan untuk menjawab apakah jQuery masih diperlukan.
author:
  name: Pande Nengah Purnawan
  bio: pandenengah.github.io
  image: /avatar/94ffe346206c3d08b3cc4bb98d798383.jpeg
tags:
  - Website Development
---
jQuery merupakan library javascript dan siapa yang tidak kenal dengan library ini? Hampir kebanyakan developer web, pastinya akan lebih memilih library ini untuk membantu pengolahan data html melalui DOM (Document Object Model). Tetapi sebelumnya, penulis sangat menghargai tim developer jQuery karena dalam satu dekade telah membantu banyak developer web (termasuk penulis) untuk berkarya. Berikut adalah alasan untuk menjawab apakah jQuery masih diperlukan.

## Hal yang membuat jQuery tidak diperlukan

Jika diperhatikan lagi jQuery merupakan library javascript, artinya setiap baris kode yang dibuat di dalam library tersebut menggunakan bahasa javascript murni. Dari hal tersebut sebenarnya sudah jelas, kita sangat bisa melakukan tugas-tugas yang berkaitan dengan DOM melalui penggunaan bahasa javascript murni secara langsung, tanpa menggunakan library tambahan.

Contoh sederhana, ketika kita ingin mengetahui apakah seluruh element HTML sudah di-load oleh browser secara keseluruhan.

__jQuery__
```js
$(document).ready(function(){
    // baris kode lain
});
```
__Vanilla Js (Javascript murni)__
```js
document.addEventListener('DOMContentLoaded', function(){
    // baris kode lain
});
```

Jika diperhatikan penulisan javascript murni juga sederhana, walaupun sedikit lebih panjang dari jQuery.

Seperti yang dijelaskan sebelumnya, jQuery merupakan library tambahan. Jadi untuk menggunakan code jQuery, kita harus menyisipkan library tambahan pada proyek yang dibuat seperti:

```html
<script src="https://code.jquery.com/jquery-3.5.1.slim.js"></script>
```

Tahukan kalian terdapat sekitar lebih dari 2000 baris kode pada library jQuery. Ini tentu saja akan berdampak pada performa website. Seperti pada contoh kode di atas. Untuk mengetahui apakah seluruh element HTML sudah di-load oleh browser saja diperlukan pengeksekusian 2000 lebih baris kode terlebih dahulu. Beda halnya jika langsung menggunakan javascript murni, browser tidak perlu mengeksekusi kode tambahan lagi, karena bahasa javascript murni memang sudah dimengerti langsung oleh browser.

Untuk menguji performa secara sederhana mari perhatikan kode dibawah ini.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.js"></script>
    <script>
        // jQuery kode
        $(document).ready(function () {
            console.log('DOM ready dari jQuery');
        });
 
        // javascript kode
        document.addEventListener('DOMContentLoaded', function(){
            console.log('DOM ready dari javascript murni');
        })
    </script>
</body>
</html>
```


Ketika kode tersebut penulis jalankan melalui browser, kemudian hasil pada jendela console memperlihatkan string log dari baris kode javascript murni terlihat tertampil lebih dahulu. Jadi sudah dipastikan penggunaan jQuery memperlambat performa website walaupun tidak signifikan.

![Benchmark waktu loading jquery dan vanilla js](/images/blog/Capture.jpg)

Percobaan di atas merupakan percobaan yang sederhana. Kita kalian masih ragu-ragu, kalian boleh membaca [postingan](https://medium.com/@trombino.marco/you-might-not-need-jquery-a-2018-performance-case-study-aa6531d0b0c3) ini. Disana dilakukan pengujian yang lebih kredibel mengenai performa penggunaan jQuery.

### Kesimpulan
Untuk menjawab pertanyaan apakah jQuery masih diperlukan untuk saat ini? Menurut opini penulis jawabannya adalah tidak diperlukan. Karena semua tugas-tugas yang dibantu oleh library tersebut sebenarnya bisa dikerjakan langsung melalui baris kode javascript murni. Ada satu website yang sangat membantu kalian para pemula mulai bermigrasi dari jQuery ke javascript murni, yaitu [website ini](https://youmightnotneedjquery.com/). Sekian.
