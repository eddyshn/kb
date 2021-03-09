# install

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
# if there is no ~/.bash_profile
#touch ~/.bash_profile
#source ~/.bash_profile
touch ~/.zshrc
source ~/.zshrc
#verify nvm has been installed, shoud output 'nvm'
command -v nvm
```

# usage

```bash
nvm install node # "node" is an alias for the latest version
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
nvm ls-remote
nvm ls
nvm alais default <version>
```

