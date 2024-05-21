/**
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l133
 */
export interface TLSETTING {
  name: string;
  description: string;
  /**
   * UNDOCUMENTED.
   */
  type?: string;
  value?: string;
}
