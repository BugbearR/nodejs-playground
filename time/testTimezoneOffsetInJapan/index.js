// Japanese historical Daylight Saving Time
const timeList = [
    { desc: "before start 1948 dst",    time: "1948-05-01T23:59:59+09:00" }, // -683802001000
    { desc: "start 1948 dst",           time: "1948-05-02T01:00:00+10:00" }, // -683802000000
    { desc: "end 1948 dst",             time: "1948-09-12T00:59:59+10:00" }, // -672310801000
    { desc: "after end 1948 dst",       time: "1948-09-12T00:00:00+09:00" }, // -672310800000
    { desc: "before start 1949 dst",    time: "1949-04-02T23:59:59+09:00" }, // -654771601000
    { desc: "start 1949 dst",           time: "1949-04-03T01:00:00+10:00" }, // -654771600000
    { desc: "end 1949 dst",             time: "1949-09-11T00:59:59+10:00" }, // -640861201000
    { desc: "after end 1949 dst",       time: "1949-09-11T00:00:00+09:00" }, // -640861200000
    { desc: "before start 1950 dst",    time: "1950-05-06T23:59:59+09:00" }, // -620298001000
    { desc: "start 1950 dst",           time: "1950-05-07T01:00:00+10:00" }, // -620298000000
    { desc: "end 1950 dst",             time: "1950-09-10T00:59:59+10:00" }, // -609411601000
    { desc: "after end 1950 dst",       time: "1950-09-10T00:00:00+09:00" }, // -609411600000
]

timeList.forEach((time) => {
    console.log(`time: ${time.time} (${time.desc})`);
    const date = new Date(time.time);
    // console.log(`date: ${date}`);
    console.log(`date.getTime(): ${date.getTime()}`);
    console.log(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`);
    // console.log(`date.toISOString(): ${date.toISOString()}`);
    // console.log(`date.toUTCString(): ${date.toUTCString()}`);
    // console.log(`date.toLocaleString(): ${date.toLocaleString()}`);
    // console.log(`date.toLocaleDateString(): ${date.toLocaleDateString()}`);
    // console.log(`date.toLocaleTimeString(): ${date.toLocaleTimeString()}`);
    // console.log(`date.toDateString(): ${date.toDateString()}`);
    // console.log(`date.toTimeString(): ${date.toTimeString()}`);
    // console.log(`date.toJSON(): ${date.toJSON()}`);
    console.log(`date.toString(): ${date.toString()}`);
});
