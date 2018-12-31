import fs from 'fs'

export const readdir = dirname =>
	new Promise(function(resolve, reject) {
		fs.readdir(dirname, function(err, filenames){
			if (err) reject(err)
			const fileList = []
			filenames.forEach(file => fileList.push(dirname + file))
			resolve(fileList)
		})
	})
