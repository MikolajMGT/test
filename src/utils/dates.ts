export class DateUtils {

	private static dateTimeOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric', month: 'numeric', day: 'numeric',
		hour: 'numeric', minute: 'numeric',
		hour12: true,
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
	};

	static convertProtoTimestamp(date: number) {
		return new Intl.DateTimeFormat('default', this.dateTimeOptions).format(date * 1000).split(',');
	}

}
