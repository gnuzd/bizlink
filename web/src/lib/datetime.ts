import ct from 'countries-and-timezones';
import { format } from 'date-fns';

class DateTime {
	timezone: string;

	constructor() {
		this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	}

	now({ formatStr }: { formatStr?: string }) {
		return new Date().getTimezoneOffset();
	}
}

export default new DateTime();
