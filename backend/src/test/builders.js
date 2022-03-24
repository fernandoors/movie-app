function buildReq({ ...overrides }) {
  const req = {
    body: {},
    params: {},
    ...overrides,
  };
  return req;
}

function buildRes(overrides = {}) {
  const res = {
    json: jest.fn(() => res).mockName('res.json()'),
    status: jest.fn(() => res).mockName('res.status()'),
    ...overrides,
  };
  return res;
}
module.exports = {
  buildReq,
  buildRes,
};
