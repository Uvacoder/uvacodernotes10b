---
id: linux
title: Linux
---

## Some useful commands

```shell
# Free memory (2.2G/7.6G)
free -h | awk '/^Mem:/ {print $3 "/" $2}'

# Top 10 memory intensive processes
ps axch -o cmd:15,%mem --sort=-%mem | head

# Top 10 CPU intensive processes
ps axch -o cmd:15,%cpu --sort=-%cpu | head

# Does your terminal emulator support _italics_?
echo -e "\e[3m foo \e[23m"

# `dd` command usage to burn an iso to a flash drive
dd if=Downloads/archlinux-x86_64.iso of=/dev/sdb status=progress

# Display the SSID of connected network
nmcli -t -f active,ssid dev wifi | egrep '^yes' | cut -d\' -f2

# Colormap in terminal
msgcat --color=test

# Set a random wallpaper from r/earthporn
wget -O - -q reddit.com/r/earthporn.json | jq '.data.children[] |.data.url' | head -1 | xargs feh --bg-fill

# Browse memes from r/memes
wget -O - -q reddit.com/r/memes.json | jq '.data.children[] |.data.url' | xargs feh

# Find external IP address
curl ipinfo.io

# See you most run commands
history | awk '{print $2}' | sort | uniq -c | sort -rn | head

# Runs `command1` 1 out of 10 times
[ $[$RANDOM % 10] = 0 ] && command1 || command2
[ $[$RANDOM % 10] = 0 ] && timeout 5 command1 || command2
[ $[$RANDOM % 10] = 0 ] && cmatrix || clear

# Find and replace all occurences of a string/pattern in text files in a directory recursively [[\*](https://stackoverflow.com/a/1585189)]
find /home/<username>/ -type f | xargs sed -i  's/<old>/<new>/g'
```

## Change username and usergroup

[[\*](https://askubuntu.com/a/317008)]

1. Drop into a tty (`Ctrl + Alt + F3`).
2. Login with username and password.
3. Set a password for root account:

   ```shell
   sudo passwd root
   ```

4. Log out.

   ```shell
   exit
   ```

5. Login with root account.
6. Change the username and home folder:

   ```shell
   usermod -l <new_username> -d /home/<new_username> -m <old_username>
   ```

7. Change the group name:

   ```shell
   groupmod -n <new_group> <old_group>
   ```

8. Lock the root account.
9. Log out.
10. Exit tty.

## Connect to Wi-Fi network with `nmcli`

Show available access points:

```shell
nmcli dev wifi
```

Connect:

```shell
nmcli dev wifi connect <access_point> password <password>
```

## Connect to a hidden Wi-Fi network using `nmcli`

```shell
nmcli c add type wifi con-name <connect name> ifname wlp1s0 ssid <SSID>
nmcli con modify <connect name> wifi-sec.key-mgmt wpa-psk
nmcli con modify <connect name> wifi-sec.psk <password>
nmcli con up <connect name>
```

## Change MAC address using `macchanger`

```shell
sudo service network-manager stop
sudo ifconfig wlan0 down
sudo macchanger -r wlan0
sudo ifconfig wlan0 up
sudo service network-manager start
```

## Desktop entry template

- [ArchWiki](https://wiki.archlinux.org/index.php/Desktop_entries)
- [freedesktop.org](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys)

Example .desktop file (`~/.local/share/applications`):

```
[Desktop Entry]
Name=pCloud
GenericName=pCloud Client
Exec=/opt/pcloud
Terminal=false
Type=Application
Categories=Application;
Comment=pCloud Cloud Storage
```

## Useful programs

- `man [program]`: View man pages for programs.
- `apropos`: Search the manual page names and descriptions.
- `[program] --help/-h`
- `cat`
- `tac`
- `tr`: Translate or delete characters.
- `cut`: Remove sections from each line of files.
  - `cut -d, -f 2,3 ratings.csv`: Output only the 2nd and 3rd columns from ratings.csv file.
- `less`
- `echo`
- `head`
- `rm`: Remove files or directories.
  - `rm -f !(test.txt)`: Remove all files in the directory except `test.txt`.
- `ls`
  - `ls -d */`: List directories only.
- `date`: Print or set the system date and time.
  - `date +%s`: Unix timestamp.
- `time`: Run programs and summarize system resource usage.
- `cal`: Displays a calendar.
- `cd`: Change working directory.
  - `cd -`: Change to previous working directory.
  - `cd ~-`: Same thing as `cd -` without echoing the path.
- `tail`
- `pwd`: Print name of current/working directory.
- `passwd`: Change user password.
- `alias`: List and create aliases.
- `mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3}`: Make directories/subdirectories quickly.
- `chsh`: Change login shell.
- `grep`: Pattern searching.
- `fdisk`: Disk partition utility.
- `cfdisk`: Disk partition utility.
- `dd`: Convert or copy a file, create bootable USBs from ISOs. **use cautiously. can destroy data irreversibly.** To monitor the progress of an operation, add the `status=progress` option to the command.
- `wc`: Print newline, word and byte counts for files.
- `history`: Show history.
  - `<space>man man`: Don't add `man man` command to history.
  - `fc`: Fix a long command that you messed up.
  - `!666`: Run 666th command in history.
  - `!-n`: Refer to the command _n_ lines back.
  - `!-1` / `!!`: Refer to the previous command.
  - `sudo !!`: Run previous command but append `sudo` at the beginning.
  - `[program] !!`: Run previous command using [program].
- `lsusb`: List USB devices.
- `lsblk`: List information about block devices.
- `env` / `printenv`: List all environmental variables.
- `free`: Display amount of free and used memory in the system.
- `df`: Report file system disk space usage.
- `du`: Estimate file space usage.
  - `du -sh dir/`: Check size of dir/ on disk.
- `fc-list`: List available fonts.
- `timedatectl`: Control the system time and date.
  - `cat /etc/timezone`: (On Debian) Print current timezone.
- `xprop`: Property displayer for X.
- `shred`: Overwrite the specified file(s) repeatedly, in order to make it harder for even very expensive hardware probing to recover the data.
- `mount`: Mount a filesystem.
- `clear`: Clear the terminal screen.
- `locate`: Find files by name.
- `updatedb`: Creates or updates a database used by locate.
- `find`: Search for files in a directory hierarchy.
- `file`: Determine file type.

### System monitoring

- `ps`: Report a snapshot of the current processes.
  - `ps aux | grep nginx`: Search for 'nginx' in ps output.
- `htop`: Interactive process viewer.
- `top`: Display Linux processes.
- `cat /proc/loadavg`: Load average.
- `uptime`: Tell how long the system has been running.
- `w`: See who is logged on and what they are doing.
- `acpi`: Shows battery status and other ACPI information.
  - (upower -i \`upower -e | grep 'BAT'\`) - Battery information.
- `pidof [program]`: Find the process ID of a running program.

### System info

- `lsb_release -a`: Print distribution-specific information.
- `cat /etc/*release`
- `uname -a`: Print system information.
- `cat /etc/fstab`: Static file system information.

### Networking

- `vim /etc/resolv.conf`: Change DNS server.
- `ip`: Show/Manipulate routing, network devices, interfaces and tunnels.
  - `ip addr`: Display IP addresses and property information.
- `ss`: Investigate sockets.
  - `ss -p`: See which apps are comsuming the Internet.

## Miscellaneous

- Drop into a tty (tty3): `Ctrl + Alt + F3`
- Move to different ttys: `Alt + Left/Right`
- Mod keys:
  - Mod1: Left Alt
  - Mod3: Right Alt
  - Mod4: Super/Windows
