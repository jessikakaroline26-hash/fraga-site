import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode";
import { useCart } from "../context/CartContext";

// ---- Funções auxiliares para montar payload PIX ---- //
function crc16ccitt(buf) {
  let crc = 0xFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function emvField(id, value) {
  const len = String(value.length).padStart(2, "0");
  return `${id}${len}${value}`;
}

function buildPixPayload({ pixKey, merchantName, merchantCity, amount, txid }) {
  const gui = "br.gov.bcb.pix";
  const mai = emvField("00", gui) + emvField("01", pixKey);

  const payload = [
    emvField("00", "01"),
    emvField("26", mai),
    emvField("52", "0000"),
    emvField("53", "986"),
    emvField("54", Number(amount).toFixed(2)),
    emvField("58", "BR"),
    emvField("59", merchantName.slice(0, 25)),
    emvField("60", merchantCity.slice(0, 15)),
    emvField("62", emvField("05", txid)),
  ].join("");

  const partial = payload + "6304";
  const crc = crc16ccitt(partial);

  return partial + crc;
}

// ---------------------------------------------------- //

export default function CheckoutPage() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const [qrDataUrl, setQrDataUrl] = useState("");
  const [pixPayload, setPixPayload] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  // SUA CHAVE PIX (CNPJ)
  const PIX_KEY = "60480649000189";

  const MERCHANT_NAME = "FRAGA MEATS";
  const MERCHANT_CITY = "MINAS";

  function gerarQR() {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    setLoading(true);

    const txid = "FRAGA" + Date.now().toString(36).slice(-8);

    const payload = buildPixPayload({
      pixKey: PIX_KEY,
      merchantName: MERCHANT_NAME,
      merchantCity: MERCHANT_CITY,
      amount: total,
      txid,
    });

    QRCode.toDataURL(payload, { scale: 8 }).then((url) => {
      setPixPayload(payload);
      setQrDataUrl(url);
      setLoading(false);
    });
  }

  function copiarCodigo() {
    navigator.clipboard.writeText(pixPayload);
    alert("Código PIX copiado!");
  }

  function confirmarPagamento() {
    setCart([]);
    navigate("/pedido-confirmado");
  }

  return (
    <div className="py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-[#111] p-8 rounded-xl border border-[#2a2a2a] text-white">

        {/* LOGO */}
        <div className="flex justify-center mb-8">
<img
  src="/logo/logo.png"
  className="h-28 mx-auto mb-4"
  style={{ filter: "drop-shadow(0px 0px 6px rgba(217,178,111,0.35))" }}
/>

        </div>

        <h1 className="text-3xl font-bold text-[#d9b26f] mb-6 text-center">
          Checkout — Pagamento via PIX
        </h1>

        {/* Resumo */}
        <div className="mb-8 text-center">
          <p className="text-gray-300">Total do pedido:</p>
          <p className="text-4xl text-[#d9b26f] font-bold mt-2">
            R$ {total.toFixed(2)}
          </p>
        </div>

        {/* Itens */}
        <div className="space-y-4 mb-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-[#0f0f0f] p-3 rounded border border-[#2a2a2a]"
            >
              <div
                className="w-20 h-20 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div>
                <p className="text-[#d9b26f] text-lg font-bold">{item.title}</p>
                <p className="text-gray-400">R$ {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão gerar QR */}
        <div className="text-center mb-8">
          <button
            onClick={gerarQR}
            className="bg-[#d9b26f] text-black px-10 py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            {loading ? "Gerando..." : "Gerar QR PIX"}
          </button>
        </div>

        {/* QR + Código */}
        {qrDataUrl && (
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white p-4 rounded-lg">
              <img src={qrDataUrl} alt="QR Code" className="w-64 h-64" />
            </div>

            <button
              onClick={copiarCodigo}
              className="border border-[#d9b26f] text-[#d9b26f] px-6 py-2 rounded-lg hover:bg-[#d9b26f] hover:text-black transition"
            >
              Copiar código PIX (copia e cola)
            </button>

            <button
              onClick={confirmarPagamento}
              className="bg-[#d9b26f] text-black px-10 py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Já paguei (simular)
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
