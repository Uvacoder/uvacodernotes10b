---
id: misc
title: Miscellaneous
---

## Publish Docusaurus (v1) site

From `website/` directory:

```shell
GIT_USER=USERNAME CURRENT_BRANCH=main USE_SSH=true npm run publish-gh-pages # SSH
GIT_USER=USERNAME CURRENT_BRANCH=main npm run publish-gh-pages # HTTPS
```

## Publish Docusaurus (v2) site

```shell
GIT_USER=USERNAME CURRENT_BRANCH=main USE_SSH=true yarn deploy # SSH
GIT_USER=USERNAME CURRENT_BRANCH=main yarn deploy # HTTPS
```

## Miscellaneous

- [Fully Qualifed Domain Name](https://en.wikipedia.org/wiki/Fully_qualified_domain_name), [dns-sd.org](http://www.dns-sd.org/TrailingDotsInDomainNames.html)
