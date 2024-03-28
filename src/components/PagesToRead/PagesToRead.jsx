import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getStoredReadBooks } from "../../localstorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${
    y + height
  }
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {

  const books = useLoaderData();
  // console.log(books)

  const savedReadBooks = getStoredReadBooks();
  // console.log(savedReadBooks);

  const [booksRead, setBooksRead] = useState([]);
  // console.log(booksRead)
  const {bookName, totalPages} = booksRead;

  useEffect( () => {
    const savedBooksIds = getStoredReadBooks();

    if(books.length > 0){

        const readBooks = [];

        for (const id of savedBooksIds){
            const book = books.find(book => book.bookId === id);
            // console.log(book)
            if(book){
                readBooks.push(book)
            }
        }
        setBooksRead(readBooks);
        // console.log(readBooks)
    }
}, [books]);

  return (
    <div>
      {/* for large device start */}
      <div className="mt-3 lg:mt-10 w-fit mx-auto hidden lg:block">
      <BarChart
        width={1500}
        height={300}
        data={booksRead}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
    {/* for large device end */}

    {/* for mobile start */}
    <div className="mt-3 lg:mt-10 w-fit mx-auto lg:hidden block">
      <BarChart
        width={450}
        height={300}
        data={booksRead}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
    {/* for mobile device end */}
    </div>
  );
};

export default PagesToRead;
