/**
 * This format is used when dumping available backups via the tlmgr restore action. JSON array of JSON objects, one per available backup.
 * https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup#l95
 */
export type TLBACKUP = {
  name?: string;
  rev?: string;
  date?: string;
}[];
