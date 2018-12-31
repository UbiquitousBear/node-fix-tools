import fs from 'fs'
import yaml from 'js-yaml'
import { readdir } from './../../filessytem'
import { parseToDictionary } from './Parser'

export const fromFilePath = filePath =>
	readdir(filePath)
	.then(filenames => filenames.map(buildDictionaryFromDefinitionFile))
	.then(dictionaries => Promise.all(dictionaries))

export const buildDictionaryFromDefinitionFile = file => 
	new Promise((resolve, reject) =>
	fs.readFile(file, (err, data) => err ? reject(err) : resolve(data)))
	.then(data => yaml.safeLoad(data))
	.then(yamlDefinition => parseToDictionary({ data: yamlDefinition }))
