export default async (req) => {
  try {
    const url = new URL(req.url);

    const input = (url.searchParams.get("word") || "")
      .toLowerCase()
      .trim();

    if (!input) {
      return new Response(
        JSON.stringify({
          error: "Parameter word belum diberikan"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Bahasa Indonesia → kategori Quick Draw
    const dictionary = {
      rumah: "house",
      mobil: "car",
      motor: "motorcycle",
      sepeda: "bicycle",
      pesawat: "airplane",
      kapal: "ship",
      kereta: "train",
      bus: "bus",

      kucing: "cat",
      anjing: "dog",
      ikan: "fish",
      burung: "bird",
      gajah: "elephant",
      kuda: "horse",

      pohon: "tree",
      bunga: "flower",
      matahari: "sun",
      bulan: "moon",
      bintang: "star",
      awan: "cloud",

      apel: "apple",
      pisang: "banana",
      pizza: "pizza",
      kue: "cake",

      gitar: "guitar",
      kamera: "camera",
      telepon: "telephone",
      komputer: "computer",

      jam: "clock",
      payung: "umbrella",
      sepatu: "shoe",
      topi: "hat",
      kacamata: "eyeglasses"
    };

    const category = dictionary[input] || input;

    return new Response(
      JSON.stringify({
        input: input,
        category: category
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
