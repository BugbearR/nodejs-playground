const log4js = require("log4js");

// See RFC 5424
// Facility
//  0 kernel messages
//  1 user-level messages
//  2 mail system
//  3 system daemons
//  4 security/authorization messages
//  5 messages generated internally by syslogd
//  6 line printer subsystem
//  7 network news subsystem
//  8 UUCP subsystem
//  9 clock daemon
// 10 security/authorization messages
// 11 FTP daemon
// 12 NTP subsystem
// 13 log audit
// 14 log alert
// 15 clock daemon (note 2)
// 16 local use 0  (local0)
// 17 local use 1  (local1)
// 18 local use 2  (local2)
// 19 local use 3  (local3)
// 20 local use 4  (local4)
// 21 local use 5  (local5)
// 22 local use 6  (local6)
// 23 local use 7  (local7)

log4js.configure({
    appenders: {
        default: {
            type: "stdout"
        },
        "cheese-journal": {
            type: "journald-appender",
            defaultFields: {
                syslog_identifier: "cheeseApp", // journalctl --identifier=cheeseApp
                syslog_facility: "16" // journalctl --facility=16
            }
        }
    },
    categories: {
        default: {
            appenders: ["default"],
            level: "trace"
        },
        cheese: {
            appenders: ["cheese-journal"],
            level: "trace"
        },
    },
});

const loggerDefault = log4js.getLogger();
loggerDefault.trace("This is trace");
loggerDefault.debug("This is debug");
loggerDefault.info("This is info");
loggerDefault.warn("This is warn");
loggerDefault.error("This is error");
loggerDefault.fatal("This is fatal");

const logger = log4js.getLogger("cheese");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

logger.error("Test key-value", { "key": "value", "key2": "value2" });

logger.error(new Error("Test Error object"));
