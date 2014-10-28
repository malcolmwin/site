---
title: "Excluding Files & Folders"
class_name: docs
full_width: true
---

You can exclude specific folders from being used in the creation of new projects from your Stack. This can be useful if you wish to prevent the copying of confidential information, such as SSH keys.

To do this, you should create a file `~/.codio/stack_exclusions`. In each line of this file, you should specify the path of the folder to be excluded.

Please note the following points

- the base path that Codio assume is `/home/codio`, so specifying `myfolder` will be translated to `/home/codio/myfolder`
- it supports [globbing](https://help.ubuntu.com/community/ShellGlobbing) for wildcard exclusions
- regular expressions are supported

##Automatically Excluded Folders
Codio will automatically exclude the following folders

    .ssh/id_rsa
