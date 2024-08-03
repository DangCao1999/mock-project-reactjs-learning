import '@testing-library/jest-dom';

function mockFetchZeroStudents() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([])
        }
        )
    );
}

function mockFetchOneStudents() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([{
                id: 1,
                name: "test1",
                phone: "1",
            }])
        }
        )
    );
}

function mockFetchTwoStudents() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([{
                id: 1,
                name: "test1",
                phone: "1",
            },
            {
                id: 2,
                name: "test2",
                phone: "2",
            }
            ])
        })
    );
}

function mockFetchStudent() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                id: 1,
                name: "test1",
                phone: "1",
            })
        })
    );
}

function mockCreateStudent() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                id: 1,
                name: "test1",
                phone: "1",
            })
        })
    );
}

function mockUpdateStudent() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                id: 1,
                name: "test1",
                phone: "1",
            })
        })
    );
}

function mockDeleteStudent() {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            status: 204
        })
    );
}

export {
    mockFetchZeroStudents,
    mockFetchOneStudents,
    mockFetchTwoStudents,
    mockFetchStudent,
    mockCreateStudent,
    mockUpdateStudent,
    mockDeleteStudent,
}