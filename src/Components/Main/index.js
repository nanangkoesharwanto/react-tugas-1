import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import fourth from "../../slide-4.jpg";

function Main() {
    return (
        <div className="main-content hide-element mt-5">
            <Container className='my-5'>
                <Row className="justify-content-md-center">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <Row className="justify-content-center bg-mid">
                <Col style={{ minHeight: 300, color: 'white' }}>
                    <h1 className='pt-3'>Kenapa memilih Edspert?</h1>
                    <h3 className='pt-3'>Edspert mencetak talenta terbaik dengan menghadirkan kelas-kelas pembelajaran berkualitas.</h3>
                    <p className='mt-4 px-3'>Kami percaya bahwa kemajuan suatu bangsa tidak lepas dari kualitas sumber daya manusianya. Oleh sebab itu Edspert hadir sebagai platform belajar skill dan pengembangan diri bersertifikat untuk meningkatkan kualitas sumber daya manusia di Indonesia agar memiliki daya saing tingkat dunia. Edspert adalah bagian dari perusahaan Widya Edutech dan juga Widya Group. Kami menyediakan berbagai kelas live interaktif dan berbagai konten pendidikan lainnya yang diisi oleh para expert atau para ahli di bidangnya agar masyarakat dapat memperoleh kelas dan konten terbaik yang berkualitas dengan akses yang mudah.</p>
                </Col>
            </Row>

            <Container className='my-5'>
                <Row className="justify-content-md-center">
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Project-based learning</Accordion.Header>
                                <Accordion.Body>
                                Terdapat project di setiap kelas yang akan kamu kerjakan di bawah bimbingan mentor. Project tersebut dapat menambah portfolio kamu.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Certificate</Accordion.Header>
                                <Accordion.Body>
                                Setelah selesai mengikuti kelas, akan ada sertifikat kelulusan yang bisa kamu gunakan untuk mempermudah mendapat pekerjaan.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Online Course</Accordion.Header>
                                <Accordion.Body>
                                Pembelajaran yang dilakukan secara mandiri. Pemamparan materi dikemas dalam bentuk video. Sesuai jadwal waktu luang kamu. Rata-rata dapat diselesaikan dalam 6-10 hari.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Main;