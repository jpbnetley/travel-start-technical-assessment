// https://developers.deezer.com/api/artist

export type Artist = {
  id: number,
  name: string,
  link: string,
  share: string,
  picture: string,
  picture_small: string,
  picture_medium: string,
  picture_big: string
  picture_xl: string,
  nb_album: number,
  nb_fan: number
  radio: boolean,
  trackList: string
}