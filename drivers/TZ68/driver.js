'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// TZ68
// http://www.tkbhome.com/?cn-p-d-277.html
// http://www.pepper1.net/zwavedb/device/414

module.exports = new ZwaveDriver( path.basename(__dirname), {
	capabilities: {
		onoff: {
			command_class: 'COMMAND_CLASS_SWITCH_BINARY',
			command_get: 'SWITCH_BINARY_GET',
			command_set: 'SWITCH_BINARY_SET',
			command_set_parser: value => ({
				'Switch Value': (value) ? 'on/enable' : 'off/disable',
			}),
			command_report: 'SWITCH_BINARY_REPORT',
			command_report_parser: report => report.Value === 'on/enable',
			pollInterval: 'poll_interval',
		},
	},
	settings: {
		led_behaviour: {
			index: 1,
			size: 1,
		},
	},
});
