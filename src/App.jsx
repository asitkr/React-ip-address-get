import './App.css'
import { useEffect, useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [deviceID, setDeviceID] = useState(null);

  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const res = await fetch('https://api.ipify.org/?format=json');
        const data = await res.json();

        console.log(res);
        if (data && data.ip) {
          setDeviceID(data.ip);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getIpAddress();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className='container px-8'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>

        <div>
          <p>Device ID: {deviceID}</p>
        </div>

        <h1 className="text-3xl font-bold underline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate laudantium voluptas ut itaque in? Quod exercitationem dolorum saepe quaerat corporis repellendus quas maiores, aperiam eos molestias? Libero voluptas cumque hic a odit deleniti, nobis praesentium labore explicabo ducimus. Assumenda illum quasi voluptatem nesciunt reiciendis rem maiores velit, iure natus odit libero id. Voluptas ad sed eius odit non provident sit ex sapiente magni perferendis, illum earum repudiandae. Harum voluptatum maiores delectus tempore qui hic necessitatibus atque amet dolores sunt! Ad asperiores atque ab quidem soluta eveniet ex aliquam adipisci distinctio autem quam, facere pariatur numquam odio hic tenetur quod a cumque, dolorem omnis, facilis amet at possimus. Aperiam nisi itaque a cumque suscipit blanditiis nam consequuntur sapiente natus quos? Voluptate dignissimos atque natus, explicabo nostrum non quae eligendi recusandae ex esse sint exercitationem numquam tempora delectus ad reiciendis ipsum soluta, corporis maiores nisi fugiat impedit quaerat quasi enim? Adipisci iure, quis nobis molestiae vero accusamus doloribus hic, totam quaerat iusto incidunt, alias sint! Explicabo dolor expedita dolorem totam iure dolorum numquam doloribus enim error, vero voluptates incidunt, assumenda ipsum ratione tempore in quam at exercitationem nisi quis quidem pariatur quod architecto maxime! Laborum reiciendis in quia iusto illo cum, velit tenetur. Minus tempore aperiam commodi libero eveniet expedita nam aut repellat esse nisi animi, possimus odio delectus. Harum, repellendus eos quae doloremque dolor fugit facere. Natus, recusandae laborum. Expedita ipsum possimus consequuntur accusantium commodi perferendis nemo omnis corporis aliquam, iure eum deleniti fugit sequi qui eos. Dolorem cumque magni ipsam inventore fuga, eum necessitatibus totam repudiandae. Enim aperiam doloribus a, iste quisquam sed molestias eum, ipsa illo id, architecto sequi corrupti natus hic minima adipisci. Aut expedita necessitatibus et placeat eligendi, quod accusantium id at ipsam nulla velit sed asperiores corrupti iure maxime quis. Fuga quidem molestias eaque quis repudiandae! Sapiente odio repudiandae numquam suscipit ab fugit voluptatum sint, saepe, tenetur totam similique mollitia laudantium odit sequi quod aspernatur? Delectus accusamus officia incidunt et ea blanditiis beatae obcaecati aspernatur assumenda fugit nemo harum, id dicta? Repellendus totam porro officia, debitis laboriosam enim nostrum est laudantium labore temporibus cumque quia corporis quis repudiandae corrupti quos, fugiat ipsum error, pariatur facere voluptatum fuga. Provident harum assumenda aspernatur vitae inventore rem omnis facilis ducimus, soluta aliquid neque voluptatibus quas exercitationem sapiente ab id laboriosam deserunt iure ea. Ipsam nisi eos facilis officia repellendus voluptatem aut nobis omnis maxime. Tempora, earum ad. Quidem nostrum at a tempora fugit soluta, libero perferendis sunt tempore et quisquam repudiandae sequi id accusantium dolores ut quo iste esse laborum obcaecati magnam rerum dicta, pariatur tenetur! Harum aperiam cupiditate natus voluptates similique deleniti assumenda non nam dolorum quaerat id explicabo ad culpa blanditiis officia beatae animi voluptas, ducimus, ipsam voluptatibus nihil. Quaerat, officia. Numquam quas, accusantium excepturi eaque dolore ullam cumque, nulla cum architecto fuga nisi iste corrupti, vitae facere nemo totam assumenda quam deserunt blanditiis? Ad deserunt rem quidem nihil ipsum iusto quod temporibus! Quia, fuga labore. Expedita optio veniam repellat quae necessitatibus vero id obcaecati excepturi!.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem debitis totam, at eius mollitia suscipit quisquam dolor. Odio recusandae expedita eligendi porro ea aut, incidunt, magni tenetur, perferendis voluptas earum! Delectus officiis enim corrupti dicta vero eum sunt fugit? Totam voluptatem sapiente dolor dolorum sit perferendis voluptate, rerum illum quos quia. Blanditiis voluptatibus illum fugiat ex, placeat aspernatur optio alias eveniet suscipit eaque nihil sit ratione illo quidem, cum esse. Sed vero architecto tempore veritatis ad eaque sequi? Nobis aliquam itaque iure dicta illo labore magni fugit quas eveniet blanditiis accusamus vero, incidunt corporis cum. Delectus veniam dolores nostrum culpa alias harum laudantium recusandae? Atque, repellat vitae excepturi illum similique quae natus aliquam iure ex animi inventore maxime corrupti a voluptatem doloremque id error ducimus harum fuga possimus eum. Aut quis odio rem tempore pariatur officia soluta accusantium itaque magnam quae harum qui molestias unde reprehenderit esse omnis inventore placeat enim nam optio error, delectus tempora animi. Ut maiores debitis, veritatis nemo quaerat hic ducimus placeat dolores in cupiditate quis? Saepe sequi nobis voluptate velit? Explicabo ex inventore suscipit accusamus iusto porro nesciunt vero, perferendis, repellendus sit iure consequatur illum facere! Tempore provident illo mollitia natus nihil odio repudiandae, ut, totam dolores a rem porro modi. Quos facere quia asperiores fugiat quidem consequatur! Ut velit rerum tempore voluptatem repellendus, necessitatibus quisquam repellat provident pariatur dicta est blanditiis aut eveniet! Dolores, non natus ex vero nihil explicabo. Omnis obcaecati corporis ut eius odio molestias voluptates veritatis minus doloribus facilis, autem dolorem natus nulla magnam alias iure nemo quasi illo temporibus. Et deleniti aliquid beatae rem a! Officia accusantium similique repudiandae dolores expedita deleniti ipsum possimus, animi quos reprehenderit facilis consequatur cupiditate totam, sapiente aspernatur unde. Quo optio illo mollitia rem nobis reprehenderit architecto nihil reiciendis facilis tempora odit alias repellat dolorum id molestiae officia quasi rerum qui enim, nulla nisi, commodi, sequi accusamus. Dolor ad asperiores temporibus eligendi, ea aut magnam ducimus repellat, aliquid alias dolores consequuntur. Temporibus recusandae saepe facere accusamus asperiores assumenda dolore eius magnam quod. Aspernatur error labore hic earum autem enim aliquid vitae omnis perferendis assumenda laborum consequuntur a tempora perspiciatis ea, vero quaerat minus fuga neque velit voluptas eligendi? Iste ullam ut natus id consectetur optio officia cupiditate harum quam saepe incidunt, ab quibusdam illum veniam alias commodi sunt porro vel nulla soluta itaque voluptatem nemo? Quas voluptatibus rem consectetur sapiente repellat voluptates officia natus perspiciatis fugiat ipsum impedit commodi ea ipsa laboriosam illo blanditiis, dolores tempora modi nam harum iusto obcaecati corrupti. Excepturi eius voluptatem expedita? Ratione sapiente ad odit quod, mollitia omnis soluta. Voluptatum, rerum debitis. Ex, velit facilis voluptatem quidem, nulla beatae dignissimos mollitia dicta quo rerum minus? Voluptatem magni in voluptatibus necessitatibus itaque repellat numquam laborum voluptas explicabo, earum et ea dolor corrupti tenetur nobis quibusdam nemo asperiores quod labore modi. Blanditiis sit enim sequi et, pariatur rem itaque culpa sapiente. Rerum ad numquam cumque repudiandae vero. Dolor, facilis corrupti impedit qui veritatis eveniet quidem odit explicabo mollitia eius nemo ea?
        </h1>
      </div>
    </div>
  )
}

export default App
