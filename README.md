# HoYo.Gacha.DarkEN

<p>
<a href="https://github.com/lgou2w/HoYo.Gacha/actions"><img src="https://img.shields.io/github/actions/workflow/status/lgou2w/HoYo.Gacha/build.yml?branch=main&logo=github&style=flat-square"/></a>
<a href="https://github.com/lgou2w/HoYo.Gacha/releases"><img src="https://img.shields.io/github/v/release/lgou2w/HoYo.Gacha?logo=github&style=flat-square&include_prereleases" /></a>
</p>

An unofficial tool for managing and analyzing your miHoYo gacha records.

**No local proxy server required**. Simply read the `Chromium` [disk cache](HoYo.Gacha/DiskCache/README.md) files and request API endpoints.

<br />
<img src="HoYo.Gacha/src-tauri/icons/icon.png" style="width:256px;" />

> [!IMPORTANT]
> The new version v1.0.0 is under reconstruction. View Issue Tracker: [#28](https://github.com/lgou2w/HoYo.Gacha/issues/28)

## Features

- [x] Supports gacha records for **`Genshin Impact`**, **`Honkai: Star Rail`**, and **`Tears of Themis`**.
- [x] Manages multiple accounts for games.
- [x] Retrieves game gacha links.
- [x] Fetches gacha records and saves them to a local database file.
- [x] Implements the [`UIGF`](https://uigf.org/zh/standards/uigf.html) Unified Interchangeable Gacha Format standard.
- [x] Implements the [`SRGF`](https://uigf.org/zh/standards/srgf.html) Star Rail Gacha Format standard.
- [ ] More in development...

<details>
  <summary>Screenshots</summary>
  <br />

- Home

![Home](HoYo.Gacha/Screenshots/home.jpg)

- Genshin Impact

![Gacha-Genshin-1](HoYo.Gacha/Screenshots/gacha-genshin-1.jpg)

- Honkai: Star Rail

![Gacha-StarRail-1](HoYo.Gacha/Screenshots/gacha-starrail-1.jpg)

![Gacha-StarRail-2](HoYo.Gacha/Screenshots/gacha-starrail-2.jpg)

![Gacha-StarRail-3](HoYo.Gacha/Screenshots/gacha-starrail-3.jpg)

</details>

## Download

- Please download the latest version from this repository's [Releases](https://github.com/lgou2w/HoYo.Gacha/releases).

- Or you can download the latest version from the mirror [Release latest](https://hoyo-gacha.lgou2w.com/release/download?id=latest).<sub>Powered by [Deno Deploy](https://deno.com/deploy).</sub>

### Notes

- The program will automatically create a database file named **`HoYo.Gacha.db`** in the **`running directory`**. This file contains **`all your local accounts`** and **`all gacha records`** data.

- Please make sure not to miss this database file when **`moving the program body file`** or **`migrating the operating system`**!

## Disk Cache

**For the implementation principle of obtaining gacha links from `Chromium Disk Cache`, please refer to: [Disk Cache](HoYo.Gacha/DiskCache/README.md)**

## Special Thanks

- [UIGF organization](https://uigf.org)
- [vikiboss/gs-helper](https://github.com/vikiboss/gs-helper)

## License

> [!NOTE]
> MIT OR Apache-2.0 **For personal learning and communication use only. Do not use for any commercial or illegal purposes.**
>
> This software will not ask for any account password information about ©miHoYo accounts, nor will it collect any user data. The data generated (including but not limited to usage data, gacha data, UID information, etc.) is stored locally on the user's side.

### Some Resource Files

[Personal Non-Commercial License](https://www.hanyi.com.cn/faq-doc-1) - Copyright © Beijing Han Yi Innovation Technology Co., Ltd.

- [src/assets/汉仪文黑-85W.ttf](src/assets/%E6%B1%89%E4%BB%AA%E6%96%87%E9%BB%91-85W.ttf)

©miHoYo | Shanghai miHoYo Yingtie Technology Co., Ltd. All Rights Reserved

- [src/assets/images/Logo.png](HoYo.Gacha/src/assets/images/Logo.png)
- [src/assets/images/genshin/*](HoYo.Gacha/src/assets/images/genshin)
- [src/assets/images/starrail/*](HoYo.Gacha/src/assets/images/starrail)
- [src/assets/images/zzz/*](HoYo.Gacha/src/assets/images/zzz)
- [src-tauri/icons/*](HoYo.Gacha/src-tauri/icons/)
