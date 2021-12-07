import { logger, LogLevel } from 'swaglog'

export * from './merge'
export * from './binary'
export * from './cmd'
export * from './files'
export * from './git-user'
export * from './glob'

export const setLogLevel = (logLevel: LogLevel = 3): void => {
	logger.setOptions({ logLevel })
}
