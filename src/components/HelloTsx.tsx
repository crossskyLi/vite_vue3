import { ref, toRefs } from 'vue';

function useClick() {
  const myCount = ref(0);

  const clickFunc = () => {
    myCount.value += 1;
    console.log(myCount.value);
  };

  return {
    myCount,
    clickFunc,
  };
}
function HelloTsx(props: { msg: string }) {
  const { myCount, clickFunc } = useClick();

  const { msg } = toRefs(props);

  return () => {
    return (
      <div>
        {msg.value} + {myCount.value}{' '}
        <button onClick={clickFunc}>click me</button>
      </div>
    );
  };
}

export default {
  props: {
    msg: { type: String, require: true },
  },
  setup: HelloTsx,
};
