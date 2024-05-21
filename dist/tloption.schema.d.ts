/**
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l133
 */
export interface TLOPTION {
  name: string;
  tlmgrname: string;
  description: string;
  format: string;
  default: string;
  value?: string;
}
