
export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   *
   * @default true
   */
  appearance?: boolean

  logo?:{
    light?:string
    dark?:string
  }

  /**
   * Global footer settings. The footer will only be displayed when a page has
   * the frontmatter option `page: true`.  You may pass `footer: false` to the
   * frontmatter to hide the footer.
   */
  footer?: {
    license?: {
      text: string
      link: string
    }

    copyright?: string
  }


}
