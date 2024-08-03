import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import StudentPage from '../StudentPage';
import { mockCreateStudent, mockFetchOneStudents, mockFetchStudent, mockFetchTwoStudents, mockFetchZeroStudents } from '../../../services/__mock__/studentService.mock';
import { createStudent } from '../../../services/studentService';

test('should render [Create Student] button', async () => {
  mockFetchOneStudents();
  await act(async () => render(<StudentPage />));

  const createStudentButton = screen.getByText("Create Student");
  expect(createStudentButton).toBeInTheDocument();
})

test('should open modal create when tap to create student', async () => {
  mockFetchOneStudents();
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

test('should close modal after call create sucessful', async () => {
  mockFetchOneStudents();
  const user = userEvent.setup();
  await act(async () => render(<StudentPage />));

  const createStudentButton = screen.getByText("Create Student");
  expect(createStudentButton).toBeInTheDocument();

  await user.click(createStudentButton);

  const studentIDValue = await screen.findByTestId("studendIdInput");
  await user.type(studentIDValue, "2");

  const studentNameValue = await screen.findByTestId("studendNameInput");
  await user.type(studentNameValue, "test2");

  const studentPhoneValue = await screen.findByTestId("studendPhoneInput");
  await user.type(studentPhoneValue, "2");

  mockCreateStudent();
  mockFetchTwoStudents();
  const createModalButton = screen.getByText("Create");
  await user.click(createModalButton);

  expect(studentIDValue).not.toBeInTheDocument();
})

test('should auto render two student after call create one more student sucessful', async () => {
  mockFetchOneStudents();
  const user = userEvent.setup();
  await act(async () => render(<StudentPage />));

  const createStudentButton = screen.getByText("Create Student");
  expect(createStudentButton).toBeInTheDocument();

  expect(screen.queryByText("test1")).toBeInTheDocument();
  expect(screen.queryByText("test2")).not.toBeInTheDocument();

  await user.click(createStudentButton);

  const studentIDValue = await screen.findByTestId("studendIdInput");
  await user.type(studentIDValue, "2");

  const studentNameValue = await screen.findByTestId("studendNameInput");
  await user.type(studentNameValue, "test2");

  const studentPhoneValue = await screen.findByTestId("studendPhoneInput");
  await user.type(studentPhoneValue, "2");

  mockFetchTwoStudents();
  const createModalButton = screen.getByText("Create");
  await user.click(createModalButton);

  expect(screen.queryByText("test1")).toBeInTheDocument();
  expect(screen.queryByText("test2")).toBeInTheDocument();
})

test('should open modal edit when tap to edit student', async () => {
  mockFetchOneStudents();
  const user = userEvent.setup();
  await act(async () => render(<StudentPage />));

  const editStudentButton = screen.getByText("Edit");
  expect(editStudentButton).toBeInTheDocument();

  mockFetchStudent();

  await user.click(editStudentButton);
  const studentIDValue = await screen.findByTestId("studendIdInput");
  expect(studentIDValue.getAttribute("value")).toBe("1");
  const studentNameValue = await screen.findByTestId("studendNameInput");
  expect(studentNameValue.getAttribute("value")).toBe("test1");
  const studentPhoneValue = await screen.findByTestId("studendPhoneInput");
  expect(studentPhoneValue.getAttribute("value")).toBe("1");
})

test('should detete student when tap to delete', async () => {
  mockFetchOneStudents();
  const user = userEvent.setup();
  await act(async () => render(<StudentPage />));
  
  expect(screen.queryByText("test1")).toBeInTheDocument();

  const deleteStudentButton = screen.getByText("Delete");
  expect(deleteStudentButton).toBeInTheDocument();

  mockFetchZeroStudents();
  await user.click(deleteStudentButton);

  expect(screen.queryByText("test1")).not.toBeInTheDocument();
})

test('should render one card student when api reponse 1 student', async () => {
  mockFetchOneStudents();
  await act(async () => render(<StudentPage />));

  const name1 = screen.queryByText("test1");
  expect(name1).toBeInTheDocument();

  const name2 = screen.queryByText("test2");
  expect(name2).not.toBeInTheDocument();
})

test('should render one card student when api reponse 2 student', async () => {
  mockFetchTwoStudents();
  await act(async () => render(<StudentPage />));

  const name1 = screen.queryByText("test1");
  expect(name1).toBeInTheDocument();

  const name2 = screen.queryByText("test2");
  expect(name2).toBeInTheDocument();
})
