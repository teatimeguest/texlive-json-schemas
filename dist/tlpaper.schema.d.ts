/**
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l116
 */
export type TLPAPER = {
  /**
   * Gives the program name.
   */
  program?: string;
  /**
   * The place where the configuration has been found.
   */
  file?: string;
  /**
   * An array of strings with first one being the currently selected paper.
   */
  options?: string[];
}[];
