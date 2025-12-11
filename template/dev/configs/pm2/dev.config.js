module.exports = {
  apps : [
	  {
		name : "apache",
		script : "E:/dev/tools/apache/2.4.66/bin/httpd.exe"
	  },
	  {
		name : "mariadb",
		script : "E:/dev/tools/mariadb/11.8.5/bin/mysqld.exe",
		args : "--defaults-file=E:/dev/configs/mariadb/my.ini",
		autorestart : true,
		restart_delay : 4000
	  },
	  {
		name : "mysql",
		script : "E:/dev/tools/mysql/8.4.7/bin/mysqld.exe",
		args : "--defaults-file=E:/dev/configs/mysql/my.ini",
		autorestart : true,
		restart_delay : 4000
	  },
  ]
}