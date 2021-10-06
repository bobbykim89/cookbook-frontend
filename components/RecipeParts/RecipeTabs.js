import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RecipeTabs = ({ ingredients, direction }) => {
  let [categories] = useState({
    Ingredients: ingredients,
    Direction: direction,
  });

  return (
    <div className='w-full px-2 py-2 rounded-xl bg-white border-gray-300 border shadow-xl'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-[#f1ac18] rounded-xl'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-lg leading-5 font-medium rounded-lg',
                  'focus:outline-none ring-white ring-opacity-60 ',
                  selected
                    ? 'text-gray-800 bg-white shadow'
                    : 'text-white hover:bg-[#f25b0a]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((post, i) => (
            <Tab.Panel key={i} className='bg-white rounded-xl p-3'>
              <div className='recipe-post relative p-3 leading-5'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post}
                </ReactMarkdown>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default RecipeTabs;
