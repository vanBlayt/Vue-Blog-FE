/**
 * @file Gulp配置
 */
'use strict'
let gulp = require('gulp')
let sftp = require('gulp-sftp')
let serverConfig = require('./sftp.config')

gulp.task('deploy', () => {
	gulp.src('dist/*').pipe(
		sftp({
			host: serverConfig.host,
			user: serverConfig.ssh.userName,
			port: serverConfig.ssh.port,
			pass: serverConfig.ssh.password,
			remotePath: serverConfig.ssh.path
		})
	)
})
