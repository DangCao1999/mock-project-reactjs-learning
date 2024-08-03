import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import StudentPage from '../StudentPage';

test('should render [Create Student] button', async () => {
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
  await act(async () => render(<StudentPage />));

  const createStudentButton = screen.getByText("Create Student");
  expect(createStudentButton).toBeInTheDocument();
})

test('should open modal create when tap to create student', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{
        id: 1,
        name: "test1",
        phone: "1",
      }
      ])
    }
    )
  );
  const user = userEvent.setup();
  await act(async () => render(<StudentPage />));

  const createStudentButton = screen.getByText("Create Student");
  expect(createStudentButton).toBeInTheDocument();

  await user.click(createStudentButton);

  const studentIDPlaceholder = screen.queryByPlaceholderText("student ID");
  expect(studentIDPlaceholder).toBeInTheDocument();
  const studentNamePlaceholder = screen.queryByPlaceholderText("student name");
  expect(studentNamePlaceholder).toBeInTheDocument();
  const studentPhoneNumberPlaceholder = screen.queryByPlaceholderText("student phone number");
  expect(studentPhoneNumberPlaceholder).toBeInTheDocument();
})

test('should open modal edit when tap to create student', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{
        id: 1,
        name: "test1",
        phone: "1",
      }
      ])
    }
    )
  );
  const user = userEvent.setup();
  await act(async () => render(<StudentPage />));

  const editStudentButton = screen.getByText("Edit");
  expect(editStudentButton).toBeInTheDocument();

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        id: 1,
        name: "test1",
        phone: "1",
      }
      )
    }
    )
  );
  await user.click(editStudentButton);

  const studentIDValue = screen.getByTestId("studendIdInput");
  expect(studentIDValue).toHaveTextContent("1");
  // const studentNameValue = screen.queryByText("test1");
  // expect(studentNameValue).toBeInTheDocument();
  // const studentPhoneNumberValue = screen.queryByText("1");
  // expect(studentPhoneNumberValue).toBeInTheDocument();
})

test('should render one card student when api reponse 1 student', async () => {
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
  await act(async () => render(<StudentPage />));

  const name1 = screen.queryByText("test1");
  expect(name1).toBeInTheDocument();

  const name2 = screen.queryByText("test2");
  expect(name2).not.toBeInTheDocument();
})

test('should render one card student when api reponse 2 student', async () => {
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
      }])
    }
    )
  );
  await act(async () => render(<StudentPage />));

  const name1 = screen.queryByText("test1");
  expect(name1).toBeInTheDocument();

  const name2 = screen.queryByText("test2");
  expect(name2).toBeInTheDocument();
})
