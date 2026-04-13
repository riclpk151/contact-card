export default function handler(req, res) {
  const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Rico Lo
N:Lo;Rico;;;
ORG:Melodise
TITLE:Producer
TEL;TYPE=CELL:+6596406719
EMAIL:rico@melodise.co
URL:https://www.melodise.co
END:VCARD`;

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'inline; filename="ck.vcf"');
  res.status(200).send(vcf);
}
