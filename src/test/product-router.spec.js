const request = require("supertest");
const app = require("../routes/product-router");

describe("Pruebas de las rutas", () => {
    it('Prueba ruta /product', (done) => {
        request(app).get('/')
            .then(reps => {
                expect(reps.statusCode).toBe(200);
                done();
            });
    });

    describe("Prueba la Ruta /product/:code", () => {
        it('Code existente', (done) => {
            request(app).get('/BT')
                .then(reps => {
                    expect(reps.statusCode).toBe(200);
                    done();
                });
        });
        it('Code no existente', (done) => {
            request(app).get('/B2')
                .then(reps => {
                    expect(reps.statusCode).toBe(404);
                    done();
                });
        });
    });
    describe("Prueba la Ruta/checkout", () => {
        it('Lista code producto es enviada', (done) => {
            request(app).post('/checkout')
                .send({ "products": ["RT", "BJX"] })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
            done();
        });
        it('Lista code producto, no es enviada', (done) => {
            request(app).post('/checkout')
                .send({})
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400);
            done();
        });
        it('Lista code productos es vacia', (done) => {
            request(app).post('/checkout')
                .send({ "products": [] })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400);
            done();
        });
        it('Codes de listas de productos no existen', (done) => {
            request(app).post('/checkout')
                .send({ "products": ["R2"] })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(404);
            done();
        });
    });
});

