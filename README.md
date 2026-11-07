<p align="center">
 <img alt="FreeTube + Tabs" src="/_icons/icon.svg" width=64 align="center">
</p>

<h1 align="center">FreeTubePlusTabs+</h1>

<h4 align="center">Ad-Free YouTube Client with Tabbed Browsing</h4>

<hr>

This is a fork of [FreeTube + Tabs](https://github.com/countgitmick/FreeTubePlusTabs),
which itself started from [FreeTube](https://github.com/FreeTubeApp/FreeTube). All
three carry the same GNU AGPL-3.0 license.

## What This Repo Is

A desktop YouTube client with browser-style tabs. It plays no ads, runs no
tracking script, and needs no Google account. See the Features section below
for what the tabs layer, the player, and subscriptions handle.

## What Changed / Added Here

- **Settings menu fix.** The quality/speed/captions menu on the video player
  closed itself a fraction of a second after opening, before you could pick
  anything. The idle timer that auto-hides the player controls now checks
  whether a settings menu is open before hiding them.
- **Download button.** Video and audio now save locally from the player, using
  a yt-dlp binary bundled with the app — nothing extra to install. Video
  filenames include the resolution.

<p align="center">
 <img alt="FreeTube + Tabs showing multiple open tabs" src="/_icons/preview.png" width=800>
</p>

## Features

- A tab holds a video, a channel, a search, or a playlist. Middle-click or Ctrl+click opens one.
- Each tab keeps its own scroll position, video timestamp, and back history.
- One tab plays audio at a time. The others pause.
- Tabs drag to reorder. The right-click menu holds Close, Close Others, Close to Right, and Duplicate.
- Shortcuts: `Ctrl+T`, `Ctrl+W`, `Ctrl+Tab`, and `Ctrl+1` to `Ctrl+9`.
- Open tabs return at the next start. The default limit is 20 tabs.
- Two API backends: the local API through youtubei.js, and Invidious.
- SponsorBlock and DeArrow.
- Linux hardware video decode through VA-API, and system media key control.

## More Info

For install instructions, data/privacy details, security notes, and
contributing — see [FreeTube + Tabs](https://github.com/countgitmick/FreeTubePlusTabs)
and the original [FreeTube](https://github.com/FreeTubeApp/FreeTube).

## License

[![GNU AGPLv3 Image](https://www.gnu.org/graphics/agplv3-155x51.png)](https://www.gnu.org/licenses/agpl-3.0.html)

FreeTube + Tabs is Free Software under the
[GNU Affero General Public License v3](https://www.gnu.org/licenses/agpl-3.0.html).
