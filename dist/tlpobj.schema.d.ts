/**
 * Identifies the category into which this package belongs.
 *
 * https://www.tug.org/texlive/doc/tlpkgdoc/TLPSRC.html#category
 */
export type Category = "Collection" | "Scheme" | "TLCore" | "Package" | "ConTeXt";

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
