> <https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt>

# JSON formats for the various outputs of tlmgr

Fields guaranteed to be present are marked with a *

## TLPOBJ

JSON object with key/values according to the underlying structure
with a few exception (`docfiles` and `docfiledata` are merged). Details:

<dl>
  <dt>String type:</dt>
  <dd>
    <p>

`name`\*, `shortdesc` (nullable), `longdesc` (nullable), `category`\*,
`catalogue` (nullable), `containerchecksum`, `srccontainerchecksum`,
`doccontainerchecksum`

Example:

```json
"name": "12many"
```

</p>
  </dd>
  <dt>Number type:</dt>
  <dd>
    <p>

`revision`*, `runsize`, `docsize`, `srcsize`, `containersize`,
`srccontainersize`, `doccontainersize`

Example:

```json
"revision": 12345
```

</p>
  </dd>
  <dt>Boolean type:</dt>
  <dd>
    <p>

`relocated`

Example:

```json
"relocated": false
```

</p>
  </dd>
  <dt>Array type (with the sub-type in parenthesis):</dt>
  <dd>
    <dl>
      <dt>of String type:</dt>
      <dd>
        <p>

`runfiles`, `srcfiles`, `executes`, `depends`, `postactions`

Example:

```json
"runfiles": ["texmf-dist/...", "texmf-dist/...file2"]
```

</p>
      </dd>
      <dt>of Object type:</dt>
      <dd>
        <p>

- `docfiles`: keys: `file`\*, `language`, `details` (all Strings)

  Example:

  ```json
  [
    { "file": "docfile1", "language": "en" },
    { "file": "docfile2", "details": "readme file" }
  ]
  ```

</p>
      </dd>
    </dl>
  </dd>
  <dt>Object type:</dt>
  <dd>
    <p>

- `binfiles`:
  keys are architecture names, values are arrays of strings (list of binfiles)

  Example:

  ```json
  {
    "x86_64-linux": ["binfile1", "binfile2", "..."],
    "win32": ["binfile3"]
  }
  ```

- `binsize`: keys are architecture names, values are numbers

  Example:

  ```json
  { "x86_64-linux": 1233, "win32": 333 }
  ```

- `cataloguedata`:
  keys are `topics`, `version`, `license`, `ctan`, `date`, `related`, `alias`,
  `also`, `contact-announce`, `contact-bugs`, `contact-development`,
  `contact-home`, `contact-repository`, `contact-support` (all strings)

  Example:

  ```json
  { "topics": "graphic", "version": "1.23" }
  ```

</p>
  </dd>
</dl>

A minimal TLPOBJ might look like

```json
{
  "name": "minimal",
  "category": "Package",
  "revision": 12345
}
```

## TLPOBJINFO

This JSON format is dumped on `tlmgr info --data json` and is slightly different
format compared to [TLPOBJ](#tlpobj) above:

- Removed fields: `revision`

- Added fields:
  <dl>
    <dt>Number type:</dt>
    <dd>
      <p>
        <code>lrev</code>, <code>rrev</code>:
        local and remote revision of the package
      </p>
    </dd>
    <dt>Boolean type:</dt>
    <dd>
      <p>
        <code>available</code> (available at repository), <code>installed</code>
      </p>
    </dd>
    <dt>Hash type:</dt>
    <dd>
      <p>
        <code>rcataloguedata</code>: catalogue data on the remote side
      </p>
    </dd>
  </dl>

## TLPDBSINGLE

JSON object with the following fields:

<dl>
  <dt>Object type:</dt>
  <dd>
    <p>
      <code>configs</code>:
      keys are the names of <code>%TLConfig::TLPDBConfigs</code>, that is
      <dl>
        <dt>Boolean type:</dt>
        <dd>
          <p>

`container_split_src_files`, `container_split_doc_files`

</p>
        <dt>String type:</dt>
        <dd>
          <p>

`container_format`, `minrelease`, `release`

</p>
        </dd>
      </dl>
    </p>
  </dd>
  <dt>Array type:</dt>
  <dd>
    <p>

- `options`: see [TLOPTION](#tloption--tlsetting) below
- `settings`: see [TLSETTING](#tloption--tlsetting) below
- `tlpkgs`: JSON array of [TLPOBJ](#tlpobj)s in JSON format

</p>
  </dd>
</dl>

## TLPDB

This format is used when dumping tlpdb, local or remote
JSON object with the following fields:
keys are tags, values are tlpdb in [TLPDBSINGLE](#tlpobjsingle) format

Example:

```jsonc
{
  "main": {
    "options": [...],
    "tlpkgs": [...]
  },
  "tlcontrib": {
    "options": [...],
    "tlpkgs": [...]
  }
}
```

## TLBACKUP

This format is used when dumping available backups via the tlmgr restore action.
JSON array of JSON objects, one per available backup.
Each backup has keys: `name`, `rev`, `date` (all strings).

Example:

```json
[
  {
    "date": "2017-10-30 11:04",
    "name": "uplatex",
    "rev": "45414"
  },
  {
    "date": "2017-09-28 10:50",
    "name": "uplatex",
    "rev": "45141"
  }
]
```

## TLPAPER

Array of objects, each one having three keys: `program`, `file`, `options`.
`program` gives the program name, `file` the place where the configuration
has been found, and `options` is an array of strings with the first
one being the currently selected paper.

Example for one element of the array:

```json
{
  "options": ["a4", "letter"],
  "file": "/usr/local/texlive/2017/texmf-config/tex/generic/config/pdftexconfig.tex",
  "program": "pdftex"
}
```

## TLOPTION / TLSETTING

Each option/setting is an object with the following keys, values
are all strings(!)

- for TLOPTIONS:
  `name`, `tlmgrname`, `description`, `format`, `default`, `value` (optional)
- for TLSETTING:
  `name`, `description`, `type` (optional), `value` (optional)

Example TLOPTION:

```json
{
  "format": "b",
  "description": "Install source files",
  "tlmgrname": "srcfiles",
  "value": "1",
  "default": "1",
  "name": "install_srcfiles"
}
```

Example TLSETTING:

```json
{
  "type": "b",
  "description": "This tree acts as user tree",
  "name": "usertree"
}
```
