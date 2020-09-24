# Yum repository configuration

```shell
/etc/yum.reops.d
ls -l
-rw-r--r--. 1 root root 1664 Nov 23  2018 CentOS-Base.repo
-rw-r--r--. 1 root root 1309 Nov 23  2018 CentOS-CR.repo
-rw-r--r--. 1 root root  649 Nov 23  2018 CentOS-Debuginfo.repo
-rw-r--r--. 1 root root  314 Nov 23  2018 CentOS-fasttrack.repo
-rw-r--r--. 1 root root  630 Nov 23  2018 CentOS-Media.repo
-rw-r--r--. 1 root root 1331 Nov 23  2018 CentOS-Sources.repo
-rw-r--r--. 1 root root 5701 Nov 23  2018 CentOS-Vault.repo
-rw-r--r--. 1 root root 2424 Oct 18  2019 docker-ce.repo
-rw-r--r--. 1 root root 2076 Apr 24  2019 mysql-community.repo
-rw-r--r--. 1 root root 2108 Apr 24  2019 mysql-community-source.repo

```

# Add Repository

```shell
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

go to `/etc/yum.repos.d` folder, you will found `docker-ce.repo` is added

# yum install

`yum install -y docker`

> -y automatically answer 'yes' for all questions

# yum remove

`sudo yum remove docker`

# Show list available in the repository

`yum list docker-ce --showduplicates | sort -r`

# install specific version

`sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io`