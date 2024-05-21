/**
 * Identifies the category into which this package belongs.
 *
 * https://www.tug.org/texlive/doc/tlpkgdoc/TLPSRC.html#category
 */
export type Category = "Collection" | "Scheme" | "TLCore" | "Package" | "ConTeXt";

/**
 * This format is used when dumping tlpdb, local or remote JSON object with the following fields: keys are tags, values are tlpdb in TLPDBSINGLE format.
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l78
 */
export interface TLPDB {
  [k: string]: TLPDBSINGLE | undefined;
}
/**
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l65
 */
export interface TLPDBSINGLE {
  options?: TLOPTION[];
  settings?: TLSETTING[];
  configs?: {
    container_split_src_files?: boolean;
    container_split_doc_files?: boolean;
    container_format?: string;
    minrelease?: string;
    release?: string;
  };
  tlpkgs?: TLPOBJ[];
}
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
/**
 * JSON object with key/values according to the underlying structure with a few exception (docfiles and docfiledata are merged).
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l9
 */
export interface TLPOBJ {
  name: string;
  shortdesc?: string | null;
  longdesc?: string | null;
  category: Category;
  catalogue?: string | null;
  containerchecksum?: string;
  srccontainerchecksum?: string;
  doccontainerchecksum?: string;
  revision: number;
  runsize?: number;
  docsize?: number;
  srcsize?: number;
  containersize?: number;
  srccontainersize?: number;
  doccontainersize?: number;
  relocated?: boolean;
  runfiles?: string[];
  srcfiles?: string[];
  executes?: string[];
  depends?: string[];
  postactions?: string[];
  docfiles?: {
    file: string;
    language?: string;
    details?: string;
  }[];
  /**
   * Keys are architecture names, values are arrays of strings (list of binfiles).
   */
  binfiles?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Keys are architecture names, values are numbers.
   */
  binsize?: {
    [k: string]: number | undefined;
  };
  cataloguedata?: {
    topics?: string;
    version?: string;
    license?: string;
    ctan?: string;
    date?: string;
    related?: string;
    /**
     * UNDOCUMENTED.
     */
    alias?: string;
    /**
     * UNDOCUMENTED.
     */
    also?: string;
    /**
     * UNDOCUMENTED.
     */
    "contact-announce"?: string;
    /**
     * UNDOCUMENTED.
     */
    "contact-bugs"?: string;
    /**
     * UNDOCUMENTED.
     */
    "contact-development"?: string;
    /**
     * UNDOCUMENTED.
     */
    "contact-home"?: string;
    /**
     * UNDOCUMENTED.
     */
    "contact-repository"?: string;
    /**
     * UNDOCUMENTED.
     */
    "contact-support"?: string;
  };
}
