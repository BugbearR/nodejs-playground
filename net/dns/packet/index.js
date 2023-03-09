const dns = require('dns');

// DNSクエリを含むDNSパケットを作成する
const packet = new dns.Packet();

// DNSヘッダーを設定する
packet.header.id = 1234;  // ランダムなIDを指定する
packet.header.qr = 0;  // クエリパケットを示すフラグ
packet.header.opcode = 0;  // クエリを示すフラグ
packet.header.aa = 0;  // 回答は権威的でないことを示すフラグ
packet.header.tc = 0;  // パケットが切り詰められたことを示すフラグ
packet.header.rd = 1;  // 再帰問い合わせを要求するフラグ
packet.header.ra = 0;  // 再帰問い合わせに対する応答が可能であることを示すフラグ
packet.header.z = 0;  // 予約領域
packet.header.rcode = 0;  // エラーコード

// DNSクエリを設定する
packet.question.push({
  name: 'example.com',
  type: 'A',
  class: 'IN'
});

console.log(packet);
