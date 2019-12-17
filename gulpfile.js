/**
 * @file Gulp配置
 */
'use strict'
let gulp = require('gulp')
let sftp = require('gulp-sftp-up4')
let serverConfig = require('./sftp.config')

// 部署到服务器
gulp.task('deploy', function () {
	return gulp.src(['dist/**/*','dist/*.html'])
		.pipe(sftp({
			host: serverConfig.host,
			port: serverConfig.ssh.port,
			user: serverConfig.ssh.userName,
			pass: serverConfig.ssh.password,
			remotePath: serverConfig.ssh.path
		}))
})
