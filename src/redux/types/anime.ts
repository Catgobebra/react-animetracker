export interface JikanImage {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface JikanResource {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Title {
  type: string
  title: string
}

export interface AiredDate {
  day: number
  month: number
  year: number
}

export interface AiredPeriod {
  from: string
  to: string
  prop: {
    from: AiredDate
    to: AiredDate
    string: string
  }
}

export interface Relation {
  relation: string
  entry: JikanResource[]
}

export interface AnimeTheme {
  openings: string[]
  endings: string[]
}

export interface ExternalLink {
  name: string
  url: string
}

export interface Anime {
  mal_id: number
  url: string
  images: {
    jpg: JikanImage
    webp: JikanImage
  }
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
  }
  approved: boolean
  titles: Title[]
  title: string
  title_english?: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: AiredPeriod
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background?: string
  season: string
  year: number
  broadcast: {
    day: string
    time: string
    timezone: string
    string: string
  }
  producers: JikanResource[]
  licensors: JikanResource[]
  studios: JikanResource[]
  genres: JikanResource[]
  explicit_genres: JikanResource[]
  themes: JikanResource[]
  demographics: JikanResource[]
  relations?: Relation[]
  theme?: AnimeTheme
  external?: ExternalLink[]
  streaming?: ExternalLink[]
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: {
    count: number
    total: number
    per_page: number
  }
}

export interface JikanResponseList {
  data: Anime[]
  pagination: Pagination
}

export interface JikanResponseSingle {
  data: Anime
}

export interface JikanImageSmall {
  image_url: string
  small_image_url: string
}

export interface Character {
  mal_id: number
  url: string
  images: {
    jpg: JikanImageSmall
    webp: JikanImageSmall
  }
  name: string
}

export interface Person {
  mal_id: number
  url: string
  images: {
    jpg: JikanImageSmall
  }
  name: string
}

export interface VoiceActor {
  person: Person
  language: string
}

export interface AnimeCharacter {
  character: Character
  role: string
  voice_actors: VoiceActor[]
}

export interface JikanResponseCharacters {
  data: AnimeCharacter[]
}

export interface StaffPerson {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
    }
  }
  name: string
}

export interface Staff {
  person: StaffPerson
  positions: string[]
}

export interface JikanResponseStaff {
  data: Staff[]
}

export interface AnimeEpisode {
  mal_id: number
  url: string
  title: string
  title_japanese: string
  title_romanji: string
  aired: string
  score: number | null
  filler: boolean
  recap: boolean
  forum_url: string
}

export interface SimplePagination {
  last_visible_page: number
  has_next_page: boolean
}

export interface JikanResponseEpisodes {
  data: AnimeEpisode[]
  pagination: SimplePagination
}

export interface VideoImages {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export interface Promo {
  title: string
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
    images: VideoImages
  }
}

export interface AnimeVideoEpisode {
  mal_id: number
  url: string
  title: string
  episode: string
  images: {
    jpg: {
      image_url: string
    }
  }
}

export interface MusicVideo {
  title: string
  video: {
    youtube_id: string
    url: string
    embed_url: string
    images: VideoImages
  }
  meta: {
    title: string
    author: string
  }
}

export interface JikanResponseVideos {
  data: {
    promo: Promo[]
    episodes: AnimeVideoEpisode[]
    music_videos: MusicVideo[]
  }
}

export interface ReviewUser {
  username: string
  url: string
  images: {
    jpg: {
      image_url: string
    }
    webp: {
      image_url: string
    }
  }
}

export interface ReviewReactions {
  overall: number
  nice: number
  love_it: number
  funny: number
  confusing: number
  informative: number
  well_written: number
  creative: number
}

export interface AnimeReview {
  user: ReviewUser
  mal_id: number
  url: string
  type: string
  reactions: ReviewReactions
  date: string
  review: string
  score: number
  tags: string[]
  is_spoiler: boolean
  is_preliminary: boolean
  episodes_watched: number
}

export interface JikanResponseReviews {
  data: AnimeReview[]
  pagination: SimplePagination
}
